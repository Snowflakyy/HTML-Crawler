import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Button,
  CheckBox,
  CheckBoxContainer,
  FormInputContainer,
  Label,
  Link,
  FormInput as Input,
} from "./elements";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useController,
} from "react-hook-form";
import { HTMLInputProps } from "../../types";
import { IconProps } from "../Icon";

export interface FormInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  control: any;
  variant?: string;
  textarea?: boolean;
  rows?: number;
  options?: { label: string; value: string; link?: string }[];
}
interface IconExtendedProps extends IconProps {
  altpath?: string;
}
type CombinedFormInputProps<T extends FieldValues = any> = FormInputProps<T> &
  IconExtendedProps;

export const FormInput = <T extends FieldValues = any>({
  placeholder,
  variant,
  name,
  control,
  textarea,
  rows,
  path,
  altpath,
  fill,
  viewBox = "0 0 20 20",
  stroke,
  options,
  strokeOpacity,
  type,
  ...props
}: CombinedFormInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "" as any,
  });

  interface CheckBoxProps {
    options: { label: string; value: string; link?: string }[];
    value: string[];
    onChange: (value: string[]) => void;
    onBlur: () => void;
  }

  const CheckBoxGroup = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ options, value, onChange, onBlur }, ref) => {
      const handleCheckboxChange = (optionValue: string) => {
        const updatedValue = value.includes(optionValue)
          ? value.filter((v) => v !== optionValue)
          : [...value, optionValue];

        onChange(updatedValue);
      };

      return (
        <>
          {options.map((option) => (
            <CheckBoxContainer
              key={option.value}
              onClick={() => handleCheckboxChange(option.value)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <CheckBox
                id={option.value}
                checked={value.includes(option.value)}
                onChange={() => {}}
                onBlur={onBlur}
                ref={ref}
              />
              <Label htmlFor={option.value}>
                {option.label}{" "}
                {option.link && <Link href="/">{option.link}</Link>}
              </Label>
            </CheckBoxContainer>
          ))}
        </>
      );
    }
  );
  CheckBoxGroup.displayName = "CheckboxGroup";

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const InputComponent = textarea ? "textarea" : "input";

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const handleTogglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  if (type === "checkbox" && options) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CheckBoxGroup
            options={options}
            value={field.value || []}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
    );
  }

  return (
    <FormInputContainer variant={invalid ? "alert" : "normal"}>
      <Input
        {...props}
        as={InputComponent}
        variant={invalid ? "alert" : "normal"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        rows={textarea ? rows : undefined}
        type={inputType}
        onKeyDown={handleKeyDown}
      />
      {type === "password" && (
        <Button
          onClick={handleTogglePasswordVisibility}
          variant="tertiary"
          iconPath={isPasswordVisible ? altpath : path}
          viewBox={viewBox}
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
        ></Button>
      )}
    </FormInputContainer>
  );
};
