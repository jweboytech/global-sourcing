import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { FieldValues, UseControllerProps } from "react-hook-form";
import PasswordInput from "@/components/input/password";

export interface PasswordInputFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "name" | "control"> {
  label: string;
  placeholder?: string;
}

function PasswordInputField<T extends FieldValues>({
  control,
  label,
  placeholder,
  name,
}: PasswordInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // console.log(field)
        return (
          <FormItem>
            {label && (
              <FormLabel className="text-black-70 text-sm font-medium">
                {label}
              </FormLabel>
            )}
            <FormControl>
              <PasswordInput
                placeholder={placeholder}
                autoComplete="off"
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

export default PasswordInputField;
