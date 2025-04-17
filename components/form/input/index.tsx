import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input, InputProps } from "../../ui/input";
import { FieldValues, UseControllerProps } from "react-hook-form";

export interface InputFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "name" | "control">,
    Partial<FormProps<T>>,
    Pick<BaseProps, "className"> {
  placeholder?: string;
}

function InputField<T extends FieldValues>({
  control,
  label,
  placeholder,
  name,
  className,
  onChange,
}: InputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // console.log(field, onChange);
        if (typeof onChange == "function") {
          field.onChange = onChange;
        }

        return (
          <FormItem>
            {label && (
              <FormLabel className="text-black-70 text-sm font-medium">
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder || "Enter"}
                className={className}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default InputField;
