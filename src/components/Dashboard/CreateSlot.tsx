/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SelectItemComponent } from "@/components/ui/SelectItem";
import { DatePicker } from "@/components/ui/DatePicker";
import { TimePickerDemo } from "@/components/ui/TimePicker";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { useCreateSlotMutation } from "@/redux/features/slotApi";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { PlusCircle } from "lucide-react";

export type TSlot = {
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
  _id?: string;
};

export function CreateSlot({ refetch }: { refetch: () => void }) {
  const { data } = useGetAllServicesQuery(undefined);
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

  const onSubmit: SubmitHandler<TSlot> = async (formData) => {
    const slotData = {
      ...formData,
      date: date ? date.toISOString() : undefined,
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      serviceId: selectedService,
      isBooked: "available",
    };
    try {
      const res = await createSlot(slotData).unwrap();
      if (res.success) {
        toast.success(res.message);
        refetch();
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 text-white bg-primary">
          <span>
            <PlusCircle />
          </span>{" "}
          Create Slot
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-[550px]  lg:max-w-[625px] bg-secondary border border-white border-opacity-30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Create a Slot
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Schedule a new slot for the selected service.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center gap-4 py-4">
            <div className="flex flex-col w-full space-y-4">
              <Label className="text-white" htmlFor="service">
                Service:
              </Label>
              <SelectItemComponent
                setSelectedService={setSelectedService}
                items={data?.data}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="date">
                Select A Date:
              </Label>
              <DatePicker setDate={setDate} />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col gap-2 md:gap-0">
                <Label className="text-white" htmlFor="startTime">
                  Start Time:
                </Label>
                <TimePickerDemo date={startTime} setDate={setStartTime} />
              </div>
              <div className="flex flex-col gap-2 md:gap-0">
                <Label className="text-white" htmlFor="endTime">
                  End Time:
                </Label>
                <TimePickerDemo date={endTime} setDate={setEndTime} />
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end w-full">
            <Button type="submit" className="text-gray-100 bg-primary">
              {slotLoading ? (
                <span className="flex items-center gap-2">
                  <p>Creating</p>
                  <p
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></p>
                </span>
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
