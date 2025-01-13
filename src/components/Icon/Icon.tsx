import { HTMLSVGProps } from "../../types";
import {Icon as IconElement} from "./elements";
export interface IconProps extends HTMLSVGProps {
  path?: string;
  fill?: "none" | string;
  stroke?: "none" | string;
  strokeOpacity?: number;
  viewBox?: string;
  iconFill?: "none" | string;
  className?: string;
}

export const Icon = ({
  path,
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24", 
  fill = "none",
  stroke,
  iconFill,
  strokeOpacity,
  className,
}: IconProps) => {
  return (
    <IconElement xmlns={xmlns} fill={fill} viewBox={viewBox} className={className}>
      <path
        d={path}
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.0"
        strokeLinecap="round"
        fill={iconFill}
        strokeLinejoin="round"
      />
    </IconElement>
  );
};

