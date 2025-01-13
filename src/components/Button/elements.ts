import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";
import { HTMLButtonProps } from "../../types";
import { theme } from "../../styles";
const buttonStyles = {
  primary: css`
    background: #fff;
    color: #14151a;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    &:hover {
      background: #b8b8b8;
    }
    &:focused {
    }
  `,
  secondary: css`
    background: #14151a;
    color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    &:hover {
      background: rgba(211, 195, 255, 0.8);
    }
  `,
  tertiary: css`
    background: rgba(255, 255, 255, 0);
    color: #fff;
    border: none;
  `,
  ghost: ``,
  yellow: css`
    background:${theme.gradients.pinkToYellow}
    color: ${theme.colors.button.secondaryPurple};
    border: none;
    &:hover {
       background:${theme.gradients.pinkToYellowHover};
    }
  `,
  follow: css`
    background: ${theme.colors.secondaryPurple};
    border: 1px solid var(--linear_stroke_glass, rgba(255, 255, 255, 0.19));
  `,
};
export const Button = styled.button<ButtonProps>(
  ({ variant, disabled }) => css`
    display: inline-flex;
    ${variant !== "tertiary" && `padding: 10px 12px;`}
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 40px;
    cursor: pointer;
    transition: 3s ease-in;
    &:hover {
      transition: 3s ease-in;
    }
    & > * {
      ${theme.typography.body.button}
    }

    ${variant == "primary" && buttonStyles.primary}
    ${variant == "secondary" && buttonStyles.secondary}
    ${variant == "tertiary" && buttonStyles.tertiary}
    ${variant == "ghost" && buttonStyles.ghost}
    ${variant == "yellow" && buttonStyles.yellow}
        ${variant == "follow" && buttonStyles.follow}
  `
);


