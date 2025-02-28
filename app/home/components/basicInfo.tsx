import CheckboxGroupField from "@/components/form/checkboxGroup";
import InputField from "@/components/form/input";
import RadioGroupField from "@/components/form/radioGroup";
import SelectField from "@/components/form/select";
import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
import {
  COMPANY_SIZE,
  INDUSTRY_TYPES,
  TEAM_SIZE,
  WORK_TYPES,
} from "@/constants";
import { getFetcher, postFetcher } from "@/utils/request/fetcher";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Search } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { z } from "zod";

const BasicInfo = ({ userId }: { userId?: number }) => {
  const { data } = useSWR<{ title: string } & PageList<Description>>(
    "/user/seller/desc",
    getFetcher
  );
  const [step, setStep] = React.useState(0);
  const { trigger, isMutating } = useSWRMutation<z.infer<typeof schema>>(
    userId ? "/user/update" : null,
    postFetcher,
    {
      onSuccess() {
        toast.success("提交成功");
      },
    }
  );

  const schema = z.object({
    // step = 0
    firstName: z.string({ message: "Please enter first name" }),
    lastName: z.string().optional(),
    country: z.string({ message: "Please select country" }),
    // step = 1
    job: z.string(),
    company:
      step === 1
        ? z.string({ message: "Please enter company name" })
        : z.string().optional(),
    industry: z.string(),
    // step = 2
    teamPeoples: z.string(),
    companyPeoples: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "country",
      job: WORK_TYPES[0].value,
      industry: INDUSTRY_TYPES[0].value,
      teamPeoples: TEAM_SIZE[0].value,
      companyPeoples: COMPANY_SIZE[0].value,
    },
  });

  const submitForm = (values: z.infer<typeof schema>) => {
    console.log(values);
    handleNextStep();
    if (step === 2) {
      trigger({ id: userId, ...values });
    }
  };

  const handleNextStep = () => {
    setStep((prev) => (prev += 1));
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev -= 1));
  };

  return (
    <div className="flex gap-4 px-6 py-8">
      <div className="flex flex-col gap-12 flex-1">
        <h2 className="font-semibold text-2xl">{data?.title}</h2>
        <ul className="grid grid-cols-1 gap-6">
          {data?.items.map((item, index) => (
            <li className="flex gap-4 items-start" key={index}>
              <div className="bg-primary/20 px-[6px] py-[6px] rounded-full h-fit">
                <Search className="text-primary" size={12} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="text-sm text-black/50">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[2px] border border-dashed h-90 mx-4" />
      <div className="flex-1">
        {step < 3 ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="flex flex-col gap-8"
            >
              {step === 0 && (
                <React.Fragment>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="font-medium text-base">
                      What&apos;s your name?
                    </FormLabel>
                    <div className="flex gap-4">
                      <InputField
                        name="firstName"
                        placeholder="Enter first name"
                        control={form.control}
                      />
                      <InputField
                        name="lastName"
                        placeholder="Enter last name"
                        control={form.control}
                      />
                    </div>
                  </div>
                  <SelectField
                    name="country"
                    label="Which country& region are you or your company in?"
                    control={form.control}
                    options={[]}
                  />
                </React.Fragment>
              )}
              {step === 1 && (
                <React.Fragment>
                  <RadioGroupField
                    name="job"
                    label="What type of company do you work for?"
                    control={form.control}
                    options={WORK_TYPES}
                  />
                  <InputField
                    name="company"
                    label="What is your company name?"
                  />
                  <SelectField
                    name="industry"
                    label="What industry is your company in?"
                    control={form.control}
                    options={INDUSTRY_TYPES}
                  />
                </React.Fragment>
              )}
              {step === 2 && (
                <React.Fragment>
                  <RadioGroupField
                    name="teamPeoples"
                    label="How many people are on your team?"
                    control={form.control}
                    options={TEAM_SIZE}
                  />
                  <RadioGroupField
                    name="companyPeoples"
                    label="How many people are work at your company?"
                    control={form.control}
                    options={COMPANY_SIZE}
                  />
                </React.Fragment>
              )}
              <div
                className={clsx(
                  (step === 1 || step === 2) && "grid grid-cols-2 gap-4"
                )}
              >
                {(step === 1 || step === 2) && (
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    size="xl"
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                )}
                {step < 3 && (
                  <Button
                    type="submit"
                    size="xl"
                    isLoading={isMutating}
                    fullWidth
                  >
                    Next
                  </Button>
                )}
              </div>
            </form>
          </Form>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="w-full h-60 bg-black/10" />
            <Button size="xl" href="/dashboard/profile" fullWidth>
              Download Now!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
