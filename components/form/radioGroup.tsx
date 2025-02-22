import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export interface RadioGroupFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "control" | "name">,
    Partial<FormProps>,
    Pick<BaseProps, "className"> {
  options?: Array<Option>;
  placeholder?: string;
  isBorder?: boolean;
}

function RadioGroupField<T extends FieldValues>({
  control,
  name,
  options = [],
  label,
}: RadioGroupFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="space-y-3">
            {label && (
              <FormLabel className="font-medium text-base">{label}</FormLabel>
            )}
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4 flex-wrap"
              >
                {options.map((item) => (
                  <FormItem
                    key={item.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={"" + item.value} />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default RadioGroupField;
