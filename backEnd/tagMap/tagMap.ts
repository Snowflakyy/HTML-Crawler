export type HtmlTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "a"
  | "img"
  | "input"
  | "table"
  | "tbody"
  | "button"
  | "div"
  | "tr"
  | "td";

export const TAG_MAP: Record<HtmlTags, string> = {
  h1: "H1",
  h2: "H2",
  h3: "H3",
  h4: "H4",
  h5: "H5",
  h6: "H6",
  p: "P",
  a: "A",
  img: "Image",
  input: "Input",
  table: "TableContainer",
  tbody: "TableBody",
  button: "Button",
  div: "DivContainer",
  tr: "TableRow",
  td: "TableCell",
};