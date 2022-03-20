import React, { FC } from "react";
import { Measure } from "store/measureSlice";
import { MeasureModal } from "./MeasureModal";

type ModalType = "measure" | "mission" | "dataset";

export interface MeasureModalProps {
  type: "measure";
  initialData: Measure;
  // onChange: (newData: Measure) => void;
  onSave: (newData: Measure) => void;
  isAdd: boolean;
  onClose: () => void;
}

export type MasterModalProps = MeasureModalProps | MeasureModalProps;

// export const MasterModal: FC<MasterModalProps> = (props) => {
//   switch (props.type) {
//     case "measure": {
//       return (<MeasureModal {...props}></MeasureModal>)
//     }
//   }
// }
