import React, { forwardRef } from "react";
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from "./elements";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <CheckboxContainer>
        <HiddenCheckbox
          ref={ref}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <StyledCheckbox checked={checked || false}>
          <Icon
            path="M1.54948 6.6365C1.25608 6.63732 0.968912 6.72119 0.721194 6.87842C0.473476 7.03564 0.275333 7.25978 0.149689 7.52491C0.0240441 7.79005 -0.0239674 8.08534 0.0112088 8.37662C0.0463851 8.6679 0.163311 8.94327 0.34846 9.17087L4.2954 14.0059C4.43613 14.1806 4.61652 14.3193 4.82159 14.4103C5.02666 14.5013 5.25049 14.5421 5.47448 14.5292C5.95356 14.5035 6.38608 14.2472 6.66184 13.8259L14.8606 0.621703C14.862 0.619512 14.8634 0.617322 14.8648 0.615164C14.9417 0.497047 14.9168 0.26297 14.758 0.11592C14.7144 0.0755382 14.663 0.0445138 14.6069 0.0247574C14.5508 0.00500091 14.4913 -0.00306931 14.432 0.00104388C14.3727 0.00515708 14.3149 0.0213666 14.2621 0.048674C14.2093 0.0759814 14.1627 0.113808 14.125 0.159826C14.1221 0.163444 14.1191 0.167007 14.1159 0.170516L5.84734 9.5128C5.81588 9.54835 5.77766 9.5773 5.73492 9.59795C5.69217 9.61861 5.64575 9.63057 5.59835 9.63313C5.55094 9.6357 5.5035 9.62882 5.45878 9.61289C5.41406 9.59697 5.37294 9.57231 5.33783 9.54036L2.59364 7.04313C2.30863 6.78186 1.93612 6.63679 1.54948 6.6365Z"
            fill="none"
            viewBox="0 0 20 20"
            stroke="#fff"
            strokeWidth={1}
            iconFill="#fff"
          />
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
);
CheckBox.displayName = "CheckBox";
