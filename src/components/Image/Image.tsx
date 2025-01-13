import { HTMLImageProps } from "../../types";
import {Image as ImageElement} from "./elements";

export interface ImageProps extends HTMLImageProps {
  transform?: number;
  origin?: string;
}
export const Image = ({ ...props }: ImageProps) => {
  return <ImageElement {...props} />;
};
