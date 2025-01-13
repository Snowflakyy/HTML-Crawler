import { forwardRef, ForwardedRef } from "react";
import { Button as ButtonElement } from "./elements";
import type { HTMLButtonProps } from "../../types";
import { Icon } from "../Icon";
export interface ButtonProps extends HTMLButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "yellow"
    | "follow";
  iconPath?: "none" | string;
  fill?: "none" | string;
  stroke?: "none" | string;
  strokeOpacity?: number;
  strokeWidth?: number;
  viewBox?: string;
}

export const Button = forwardRef(
  (
    {
      fill,
      variant,
      iconPath,
      children,
      stroke,
      viewBox,
      strokeOpacity,
      strokeWidth,
      disabled,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <ButtonElement {...props} variant={variant} disabled={disabled} ref={ref}>
        {children}{" "}
        {iconPath != null && (
          <Icon
            path={iconPath}
            strokeWidth={strokeWidth}
            viewBox={viewBox}
            stroke={stroke}
            strokeOpacity={strokeOpacity}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          />
        )}
      </ButtonElement>
    );
  }
);
