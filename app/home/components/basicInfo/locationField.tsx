import SelectField from "@/components/form/select";
import { serializateUrl } from "@/utils";
import { getFetcher } from "@/utils/request/fetcher";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";

const LocationField = ({ form }: { form: UseFormReturn }) => {
  const { data: countryData } = useSWR<any>("/user/country", getFetcher);
  const country = form.watch("country");
  const { data: cityData } = useSWR<any>(
    country ? serializateUrl("/user/city", { country, maxRows: 20 }) : null,
    getFetcher
  );

  console.log(country, cityData);

  const countryList = countryData?.map((item) => ({
    label: item.countryName,
    value: item.countryCode,
  }));

  return (
    <SelectField
      name="country"
      label="Which country& region are you or your company in?"
      control={form.control}
      options={countryList}
    />
  );
};

export default LocationField;
