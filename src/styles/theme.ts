import { DefaultTheme } from "styled-components";
import { typography } from "./typographyStyles";
import { colors } from "./colorStyles";
import { breakpoints } from "./breakpoints";
import { paddings } from "./paddings";
import { gradients } from "./gradients";
import { Breakpoints, Colors, Gradients, Paddings } from "./types";

interface Theme extends DefaultTheme {
  colors: Colors;
  typography: any; // Replace 'any' with the actual type of typography if available
  breakpoints: Breakpoints;
  paddings: Paddings;
  gradients: Gradients;
}
export const theme: Theme = {
  colors,
  typography,
  gradients,
  breakpoints,
  paddings,
};
