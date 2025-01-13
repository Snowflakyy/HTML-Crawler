import styled, { css } from "styled-components";
import { Icon as _icon } from "../Icon";
import { theme } from "../../styles";
import { Button as _button } from "../Button";
import { CheckBox as _check } from "./CheckBox";
import { Alink as _link } from "../Typography";
export const FormInputContainer = styled.div<{ variant?: string }>(
  ({ variant }) => css`
    position: relative;
display: flex;
padding: 10px 14px;
align-items: center;
gap: var(--spacing-xs, 4px);
align-self: stretch;
border-radius: var(--radius-xl, 12px);
border: 1px solid var(--Input-field-Light-mode-Stroke-Primary, #DEE0E3);
background: var(--Input-field-Light-mode-Fill-Primary, #FFF);
box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
  `
);
export const Icon = styled(_icon)(() => css``);
export const FormInput = styled.input<{ variant?: string }>(
  ({ variant }) => css`
display: flex;
padding: 10px 14px;
align-items: center;
gap: var(--spacing-xs, 4px);
align-self: stretch;
border-radius: var(--radius-xl, 12px);
border: 1px solid var(--Input-field-Light-mode-Stroke-Primary, ${theme.colors.dark});
background: var(--Input-field-Light-mode-Fill-Primary, #FFF);
box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    ${theme.typography.body.medium.large};
    &::placeholder {
      color: ${variant !== "alert"
        ? theme.colors.textSecondary
        : theme.colors.error};
      opacity: 0.5;
    }
    &:hover {
    }
    &:focus {
        
      &::placeholder {
        color: ${variant !== "alert" ? theme.colors.textTertiary : theme.colors.error};
      }
      ${variant === "alert" && css``}
    }

    ${variant === "alert" && css``}
  `
);

export const CheckBox = styled(_check)(
  () => css`
    align-self: end;
  `
);
export const Label = styled.label(
  () => css`
    ${(props) => props.theme.typography.body.medium.regular2};
    color: ${(props) => props.theme.colors.text};
  `
);
export const Link = styled(_link)(
  () => css`
    color: inherit;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.text}`};
  `
);
export const CheckBoxContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `
);
export const Button = styled(_button)(() => css``);
