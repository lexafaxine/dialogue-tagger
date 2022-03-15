// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox_ from "components/MDBox";
import MDTypography_ from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/Appstate";
import React from "react";
import { Measure, MEASURELIST_TYPE, WholeMeasure } from "store/MeasureListReducer";
import { Button, ModalTypeMap, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MasterModal, MasterModalProps } from "./MasterModal";

const MDBox = MDBox_ as FC<PropsWithChildren<any>>;
const MDTypography = MDTypography_ as FC<PropsWithChildren<any>>;

interface MeasureViewerProps {
  measureList: Array<Measure>;
  setMeasureList: (newData: Measure) => void;
  setDisplay: (newData: MasterModalProps | null) => void;
}

interface MeasureTableProps {
  measureList: Array<Measure>;
  setDisplay: (newData: MasterModalProps | null) => void;
}

export const useMeasureList = () => {

  const measureListState = useSelector((state: AppState) => state.measureList);
  const dispatch = useDispatch();

  const setMeasureList = useCallback((measure: Measure) => {
    const measureList = measureListState.measures;

    dispatch({
      type: MEASURELIST_TYPE,
      payload: {
        measures: [...measureList, measure]
      }
    });
  }, [measureListState,]);

  return {
    measureListState,
    setMeasureList,
  }

}

const MeasureTable = (props: MeasureTableProps) => {

  const measureList = props.measureList;

  const onClickBuilder = (rowId: number) => {
    return () => {
      const initialData = measureList[rowId];

      props.setDisplay(
        {
          type: "measure",
          initialData: initialData,
          onAdd: () => {},
          isAdd: false,
          onClose: () => {
            props.setDisplay(null);
          }
        }
      )
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ display: "table-header-group" }}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Scale</TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {measureList.map(({ title, description, type, tags }, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={onClickBuilder(i)}>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="right">{description}</TableCell>
              <TableCell align="right">{type}</TableCell>
              {
                // to do a tags 
              }
              <TableCell align="right">{tags}</TableCell>
              <TableCell align="right">delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const MeasureViewer = (props: MeasureViewerProps) => {

  const measureList = props.measureList;

  return (
    <Grid item xs={6}>
      <MeasureTable measureList={measureList} setDisplay={props.setDisplay}></MeasureTable>
      <Button onClick={() => {
        const initialData: WholeMeasure = {
          title: "",
          description: "",
          type: "whole",
          tags: []
        };

        props.setDisplay(
          {
            type: "measure",
            initialData: initialData,
            // onAdd: props.setMeasureList,
            onAdd: (newMeausure: Measure) => {
              props.setMeasureList(newMeausure);
              props.setDisplay(null);
            },
            isAdd: true,
            onClose: () => {
              props.setDisplay(null);
            }
          }
        )

      }}>Add Measure</Button>
    </Grid>
  )
}


export const Dashboard: FC<any> = () => {

  const { measureListState, setMeasureList } = useMeasureList();

  const measureList = measureListState.measures;

  const [display, setDisplay] = useState<null | MasterModalProps>(null);

  return (
    <DashboardLayout>
      <DashboardNavbar></DashboardNavbar>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MeasureViewer measureList={measureList} setMeasureList={setMeasureList} setDisplay={setDisplay}></MeasureViewer>
            {
              (display !== null) && <MasterModal {...display}></MasterModal>
            }
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  )
};