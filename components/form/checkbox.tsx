import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

export interface CheckboxFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "control" | "name">,
    Pick<FormProps, "label"> {}

function CheckboxField<T extends FieldValues>({
  control,
  name,
  label,
}: CheckboxFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <div className="flex gap-3 items-center">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id={name}
                />
                <label
                  htmlFor={name}
                  className="text-sm text-black-90 leading-none peer-disabled:cursor-not-allowed"
                >
                  {label}
                </label>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}

export default CheckboxField;
