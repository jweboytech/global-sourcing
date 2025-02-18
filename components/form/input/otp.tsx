import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export interface InputOPTFieldProps<T extends FieldValues>
  extends Pick<UseControllerProps<T>, "rules" | "name" | "control">,
    Partial<FormProps<T>> {}

function InputOPTField<T extends FieldValues>({
  control,
  name,
  label,
}: InputOPTFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-black-70 text-sm font-medium">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputOPTField;
