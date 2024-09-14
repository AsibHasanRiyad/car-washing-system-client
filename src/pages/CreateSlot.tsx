import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/DatePicker";
import { Label } from "@/components/ui/label";
import { SelectItemComponent } from "@/components/ui/SelectItem";
import { TimePickerDemo } from "@/components/ui/TimePicker";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { useCreateSlotMutation } from "@/redux/features/slotApi";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type TSlot = {
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
  _id?: string;
};

export function CreateSlot() {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [date, setDate] = React.useState<Date | undefined>();
  const [startTime, setStartTime] = React.useState<Date | undefined>();
  const [endTime, setEndTime] = React.useState<Date | undefined>();
  const [createSlot, { isLoading: slotLoading }] = useCreateSlotMutation();

  const { handleSubmit } = useForm<TSlot>();

  const formatTime = (date: Date | undefined): string => {
    if (!date) return "00:00";
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  // console.log(error);
  const onSubmit: SubmitHandler<TSlot> = async (formData) => {
    const slotData = {
      ...formData,
      date: date ? date.toISOString() : undefined,
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      serviceId: selectedService,
      isBooked: "available",
    };
    // console.log(slotData);
    try {
      const res = await createSlot(slotData).unwrap();
      // console.log(res, "res");
      if (res.success) {
        toast.success(res.message);
      }
    } catch (err) {
      toast.error((err as any)?.data?.message || "Something went wrong");
    }
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className=" w-[350px] md:w-[550px] bg-black bg-opacity-10 backdrop-blur-lg shadow-xl border border-white border-opacity-30">
          <CardHeader>
            <CardTitle className="my-3 text-center text-primary">
              Create a Slot
            </CardTitle>
            <CardDescription className=" text-neutral-400">
              Create a comprehensive service offering for CleanCarCo, tailored
              to provide exceptional car care solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid items-center gap-4">
              <div className="flex flex-col space-y-4 w-[300px] md:w-full">
                <Label className="text-white" htmlFor="name">
                  Service Name :
                </Label>

                <SelectItemComponent
                  setSelectedService={setSelectedService}
                  items={data?.data}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-white" htmlFor="description">
                  Select A Date :
                </Label>
                <DatePicker setDate={setDate} />
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-row">
                <div className="flex flex-col gap-2 md:gap-0">
                  <Label className="text-white" htmlFor="startTime">
                    Start Time:
                  </Label>
                  <TimePickerDemo date={startTime} setDate={setStartTime} />
                </div>
                <div className="flex flex-col gap-2 md:gap-0 ">
                  <Label className="text-white" htmlFor="endTime">
                    End Time:
                  </Label>
                  <TimePickerDemo date={endTime} setDate={setEndTime} />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end w-full">
            <Button className="text-gray-100 bg-primary">
              {slotLoading ? (
                <span className="flex items-center gap-2 ">
                  <p>Creating</p>
                  <p
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  ></p>
                </span>
              ) : (
                "Create"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
