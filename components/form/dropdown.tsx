import React from "react";
import Dropdown, { DropdownOptionProps } from "../dropdown";
import { FormControl, FormField, FormItem } from "../ui/form";
import { FieldValue, FieldValues, UseControllerProps } from "react-hook-form";
import { CountryOptions } from "@/config/constants";

export interface DropdownFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "control"> {
  label?: string;
  placeholder?: string;
  options: Option[];
  name: any;
}

function DropdownField<T extends FieldValues>({
  label,
  control,
  name,
  placeholder,
  options,
}: DropdownFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Dropdown
                type="select"
                label={label}
                value={field.value}
                placeholder={placeholder}
                options={options}
                onChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}

export default DropdownField;
