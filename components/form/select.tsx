import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export interface SelectFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "control">,
    Partial<FormProps>,
    Pick<BaseProps, "className"> {
  options?: Array<Option>;
  placeholder?: string;
  isBorder?: boolean;
  name: any;
}

function SelectField<T extends FieldValues>({
  control,
  name,
  options = [],
  label,
  className,
  placeholder,
  isBorder,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            {label && (
              <FormLabel className="text-[#6C6A73] text-sm font-medium ">
                {label}
              </FormLabel>
            )}
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={options[0]?.value}
            >
              <FormControl>
                <SelectTrigger className={className} isBorder={isBorder}>
                  <SelectValue
                    placeholder={
                      <span className="text-black-60">
                        {placeholder || "Select"}
                      </span>
                    }
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default SelectField;
