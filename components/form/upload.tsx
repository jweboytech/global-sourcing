import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import Upload, { UploadProps } from "../upload";

export interface UploadFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "control" | "name">,
    UploadProps {
  label?: string;
}

function UploadField<T extends FieldValues>({
  control,
  name,
}: UploadFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Upload value={field.value} onChange={field.onChange} />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}

export default UploadField;
