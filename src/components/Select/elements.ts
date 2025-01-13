import Select, { Props } from "react-select";
import styled, { css } from "styled-components";
import { Icon as _icon } from "../Icon";
import { OptionsProps } from "./Select";
export const SelectWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #bcbcbc;
`;

export const StyledSelect = styled(Select).attrs<Props<OptionsProps, false>>({
  classNamePrefix: "react-select",
})<Props<OptionsProps, false>>`
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;

  &:hover {
  }

  &--is-focused {
  }
  .react-select__control {
    display: flex;
    align-items: flex-end;
    padding: 0px;
    gap: 4px;
    border-radius: 12px;
    border: none;
    outline: none;
    width: 100%;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    background: transparent;
  }
  .react-select__menu {
    background-color: ${(props) => props.theme.colors.pink};
    box-shadow: none;
  }

  .react-select__option {
    cursor: pointer;
    ${(props) => props.theme.typography.body.medium.regular2};
    color: ${(props) => props.theme.colors.dark};
  }

  .react-select__placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
    ${(props) => props.theme.typography.body.medium.large};
    opacity: 0.5;
    margin:0px;
    }
  react-select__value-container {
    padding: 0px;
  }
  .react-select__single-value {
    color: ${(props) => props.theme.colors.text};
  }
  .react-select__input {
    color: ${(props) => props.theme.colors.tertiaryPurple};
    &:hover {
      background-color: black;
    }
  }
  .react-select__input-container {
    padding: 0px 4px;
  }
  .react-select__indicator-separator {
    display: none;
  }
`;

export const Icon = styled(_icon)(() => css``);
