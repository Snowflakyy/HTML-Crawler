import { forwardRef } from "react";
import { Icon, SelectWrapper, StyledSelect } from "./elements";
import {
  components,
  type GroupBase,
  type Props,
  ActionMeta,
  SingleValue,
} from "react-select";

export interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<Props<OptionsProps, false>, "onChange" | "value"> {
  options: OptionsProps[];
  placeholder: string;
  name: string;
  error?: string;
  value: string | null;
  onChange?: (value: string | null, action: ActionMeta<OptionsProps>) => void;
}

const CustomDropDownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <Icon
      path="M7 10L12.0008 14.58L17 10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    />
  </components.DropdownIndicator>
);

const ClearIndicator = (props: any) => (
  <components.ClearIndicator {...props}>
    <Icon
      path="M16 8L8 16M16 16L8 8"
      viewBox="0 0  24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    />
  </components.ClearIndicator>
);

const Option = (props: any) => (
  <components.Option {...props}>
    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {props.isSelected && (
        <Icon
          path="M16 8L8 16M16 16L8 8"
          viewBox="0 0  24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
        />
      )}
      <span>{props.children}</span>
    </span>
  </components.Option>
);

export const Select = forwardRef<any, SelectProps>(
  ({ options, placeholder, error, value, onChange, ...props }, ref) => {
    return (
      <SelectWrapper>
        <StyledSelect
          {...props}
          ref={ref}
          options={options}
          placeholder={placeholder}
          isClearable
          isSearchable={false}
          value={options?.find((option) => option.value === value) || null}
          onChange={(selectedOption, actionMeta) => {
            const castedOption = selectedOption as SingleValue<OptionsProps>;
            onChange?.(castedOption ? castedOption.value : null, actionMeta);
          }}
          components={{
            DropdownIndicator: CustomDropDownIndicator,
            ClearIndicator,
            Option,
          }}
        />
      </SelectWrapper>
    );
  }
);
Select.displayName = "Select";
