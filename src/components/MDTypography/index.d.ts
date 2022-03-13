import { TypographyProps } from "@mui/material";
import { BoxProps } from "@mui/system";
import { FC, PropsWithChildren } from "react";


type Color =
  "inherit" |
  "primary" |
  "secondary" |
  "info" |
  "success" |
  "warning" |
  "error" |
  "light" |
  "dark" |
  "text" |
  "white" |
  never;


type FontWeight = false | "light" | "regular" | "medium" | "bold" | never;


type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | never;


type VerticalAlign = "unset" |
  "baseline" |
  "sub" |
  "super" |
  "text-top" |
  "text-bottom" |
  "middle" |
  "top" |
  "bottom" |
  never;


interface MDTypographyProps {
  color: Color,
  fontWeight: FontWeight,
  textTransform: TextTransform,
  verticalAlign: VerticalAlign,
  textGradient: boolean,
  opacity: number,
}


declare var MDTypography: FC<PropsWithChildren<Partial<MDTypographyProps>> & TypographyProps>;

export default MDTypography;
