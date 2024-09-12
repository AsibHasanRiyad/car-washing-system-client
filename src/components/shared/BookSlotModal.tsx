import { useForm } from "react-hook-form";

import { FaArrowRightLong } from "react-icons/fa6";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TSlotData } from "@/pages/AllSlot";

import { useAppSelector } from "@/redux/hook";
import { useCurrentUserId } from "@/redux/features/authSlice";
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
export function BookingSlotModal({ slotData }: { slotData: TSlotData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  // console.log(slotData, "slotData");
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const userId = useAppSelector(useCurrentUserId);

  const onSubmit = async (data: formData) => {
    const payload = {
      customer: userId,
      service: slotData?.serviceId,
      slot: slotData?._id,
      vehicleType: selectedService,
      vehicleBrand: data.vehicleBrand,
      vehicleModel: data.vehicleModel,
      manufacturingYear: data.manufacturingYear,
      registrationPlate: data.registrationPlate,
    };
    // console.log(payload);
    try {
      const res = await createBooking(payload).unwrap();
      // console.log(res, "res");
      if (res.success) {
        toast.success(res.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button
            variant="expandIcon"
            Icon={FaArrowRightLong}
            iconPlacement="right"
            className="px-16 py-5 text-white rounded-lg bg-primary mt-7 "
          >
            Pay Now
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Book this slot</DialogTitle>
            <DialogDescription>
              Do you want to book this slot? You can cancel it later, but we do
              recommend confirming as soon as possible to secure your spot.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="vehicleType" className="col-span-1 text-right">
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
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <p>Loading...</p>
                    <p
                      className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                      role="status"
                    ></p>
                  </span>
                ) : (
                  "Pay"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
