import styled, { css } from "styled-components";
import { Icon as _icon } from "../../Icon";
import { CheckBoxProps } from "./CheckBox";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckBoxProps>(
  ({ checked }) => css`
    display: inline-flex;
    position: relative;
    width: 24px;
    height: 24px;
    background: ${(props) =>
      checked ? props.theme.colors.pink : props.theme.colors.text};
    border: 1px solid #4c51bf;
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    ${HiddenCheckbox}:hover + & {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }
  `
);

export const Icon = styled(_icon)(
  () => css`
    position: absolute;
    bottom: 0;
    right: -7%;
  `
);
