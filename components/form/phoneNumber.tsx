import React from "react";
import InputField from "./input";
import SelectField from "./select";
import { COUNTRY_CODE_LIST } from "@/constants/profile";

const PhoneNumberField = () => {
  return (
    <div className="space-y-1">
      <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black-70 text-sm font-medium">
        Phone Number
      </label>
      <div className="flex items-center border-b border-black-40 mt-1">
        <SelectField
          options={COUNTRY_CODE_LIST}
          name="phone.code"
          className="w-20 pr-2"
          isBorder={false}
        />
        <div className="w-[1px] h-4 bg-black-40" />
        <div className="flex-1 pl-2">
          <InputField name="phone.value" isBorder={false} />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberField;
