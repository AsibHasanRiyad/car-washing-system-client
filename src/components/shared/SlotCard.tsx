import { useForm } from "react-hook-form";
import { Cog, CalendarDays, Clock } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TSlotData } from "@/pages/AllSlot";
import { ScrollArea } from "../ui/scroll-area";

import { useAppSelector } from "@/redux/hook";
import { useCurrentUser, useCurrentUserId } from "@/redux/features/authSlice";
import { useCreateBookingMutation } from "@/redux/features/bookingApi";
import { toast } from "sonner";
import { SelectItemComponent } from "../ui/SelectItem";
import { useState } from "react";

type formData = {
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
const vehicleTypes = [
  { _id: "car", name: "Car" },
  { _id: "truck", name: "Truck" },
  { _id: "SUV", name: "SUV" },
  { _id: "van", name: "Van" },
  { _id: "motorcycle", name: "Motorcycle" },
  { _id: "bus", name: "Bus" },
  { _id: "electricVehicle", name: "Electric Vehicle" },
  { _id: "hybridVehicle", name: "Hybrid Vehicle" },
  { _id: "bicycle", name: "Bicycle" },
  { _id: "tractor", name: "Tractor" },
];
export function SlotCard({
  slotData,
  refetch,
}: {
  slotData: TSlotData;
  refetch: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const [createBooking] = useCreateBookingMutation();

  const [selectedService, setSelectedService] = useState<string | undefined>();
  // console.log(selectedService);

  const duration = slotData?.serviceId?.duration;
  const durationInHours = duration / 60;
  const date = slotData?.date;
  const formatDate = (isoDate: string) => {
    return dayjs(isoDate).format("DD-MM-YYYY");
  };
  const formattedDate = formatDate(date);
  const userId = useAppSelector(useCurrentUserId);
  const userRole = useAppSelector(useCurrentUser)?.role;

  const onSubmit = async (data: formData) => {
    const payload = {
      customer: userId,
      service: slotData?.serviceId?._id,
      slot: slotData?._id,
      vehicleType: selectedService,
      vehicleBrand: data.vehicleBrand,
      vehicleModel: data.vehicleModel,
      manufacturingYear: data.manufacturingYear,
      registrationPlate: data.registrationPlate,
    };
    console.log(payload);
    try {
      const res = await createBooking(payload).unwrap();
      console.log(res, "res");
      if (res.success) {
        toast.success(res.message);
        refetch();
      }
    } catch (err) {
      toast.error((err as any)?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Card className="bg-white text-secondary drop-shadow-xl">
        <CardHeader>
          <CardTitle className="text-primary ">
            {slotData?.serviceId?.name}
          </CardTitle>
          <CardDescription>
            <ScrollArea className="h-[65px] border-none  rounded-md border mt-2 ">
              {slotData?.serviceId?.description}
            </ScrollArea>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center p-4 space-x-4 border border-black rounded-md ">
            <Cog />
            <div className="flex-1 space-y-1">
              <p className="font-medium leading-none ">
                Price: ${slotData?.serviceId?.price}
              </p>
              <p className="text-muted-foreground">
                Duration: {durationInHours} Hours
              </p>
            </div>
          </div>
          <div className="space-y-2.5 ">
            <h1 className="flex gap-2 font-semibold ">
              <span>
                <CalendarDays />
              </span>
              Date: {formattedDate}
            </h1>
            <h1 className="flex gap-2 font-semibold ">
              <span>
                <Clock />
              </span>
              Start Time: {slotData?.startTime}
            </h1>
            <h1 className="flex gap-2 font-semibold ">
              <span>
                <Clock />
              </span>
              End Time: {slotData?.endTime}
            </h1>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            {userRole === "user" && (
              <DialogTrigger className="w-full" asChild>
                <Button
                  variant="expandIcon"
                  Icon={FaArrowRightLong}
                  iconPlacement="right"
                  className="px-16 py-5 text-white bg-black rounded-lg hover:bg-gray-900"
                >
                  Book Slot
                </Button>
              </DialogTrigger>
            )}
            <DialogContent className=" max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Book this slot</DialogTitle>
                <DialogDescription>
                  Do you want to book this slot? You can cancel it later, but we
                  do recommend confirming as soon as possible to secure your
                  spot.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label
                      htmlFor="vehicleType"
                      className="col-span-1 text-right"
                    >
                      Vehicle Type
                    </Label>

                    <div className="col-span-3 ">
                      <SelectItemComponent
                        setSelectedService={setSelectedService}
                        items={vehicleTypes}
                      />
                      {errors.vehicleModel && (
                        <p className="col-span-3 text-red-500">
                          Vehicle model is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="vehicleBrand" className="text-right">
                      Vehicle Brand
                    </Label>
                    <Input
                      id="vehicleBrand"
                      {...register("vehicleBrand", { required: true })}
                      placeholder="Toyota, Honda, etc."
                      className="col-span-3"
                    />
                    {errors.vehicleBrand && (
                      <p className="col-span-3 text-red-500">
                        Vehicle brand is required
                      </p>
                    )}
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="vehicleModel" className="text-right">
                      Vehicle Model
                    </Label>
                    <Input
                      id="vehicleModel"
                      {...register("vehicleModel", { required: true })}
                      placeholder="Car, Bike, etc."
                      className="col-span-3"
                    />
                    {errors.vehicleModel && (
                      <p className="col-span-3 text-red-500">
                        Vehicle type is required
                      </p>
                    )}
                  </div>

                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="manufacturingYear" className="text-right">
                      Manufacturing Year
                    </Label>
                    <Input
                      id="manufacturingYear"
                      {...register("manufacturingYear", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="2019"
                      type="number"
                      className="col-span-3"
                    />
                    {errors.manufacturingYear && (
                      <p className="col-span-3 text-red-500">
                        Manufacturing year is required
                      </p>
                    )}
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="registrationPlate" className="text-right">
                      Registration Plate
                    </Label>
                    <Input
                      id="registrationPlate"
                      {...register("registrationPlate", { required: true })}
                      placeholder="ABC123"
                      className="col-span-3"
                    />
                    {errors.registrationPlate && (
                      <p className="col-span-3 text-red-500">
                        Registration plate is required
                      </p>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="text-white bg-secondary hover:bg-black"
                    type="submit"
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}
