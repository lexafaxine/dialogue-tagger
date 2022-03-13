import { BoxProps } from "@mui/system";
import { FC } from "react";


type ColoredShadow =
  "primary" |
  "secondary" |
  "info" |
  "success" |
  "warning" |
  "error" |
  "light" |
  "dark" |
  "none" |
  never;


interface MDBoxProps {
  variant: "contained" | "gradient",
  bgColor: string,
  color: string,
  opacity: number,
  borderRadius: string,
  shadow: string,
  coloredShadow: ColoredShadow,
}

declare var MDBox: FC<Partial<MDBoxProps> & BoxProps>;

export default MDBox;
