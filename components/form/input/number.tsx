import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { FieldValues, UseControllerProps } from "react-hook-form";
import InputNumber from "../../input/number";

export interface InputNumberFieldProps<T extends FieldValues>
  extends Omit<Pick<UseControllerProps<T>, "rules" | "control">, "name"> {
  label?: string;
  placeholder?: string;
  name: any;
}

function InputNumberField<T extends FieldValues>({
  control,
  label,
  placeholder,
  name,
}: InputNumberFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel className="capitalize">{label}</FormLabel>}
            <FormControl>
              <InputNumber placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default InputNumberField;
