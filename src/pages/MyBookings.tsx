import { BookingCard } from "@/components/shared/BookingCard";
import Loader from "@/components/shared/Loader";

import { useGetMyBookingsQuery } from "@/redux/features/bookingApi";
import { TService } from "./CreateService";
import { TSlot } from "./CreateSlot";
import Title from "@/components/shared/Title";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
}
export type TBookings = {
  _id: string;
  customer: Customer;
  service: TService;
  slot: TSlot;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};

const MyBookings = () => {
  const { data, isFetching, isLoading } = useGetMyBookingsQuery(undefined);
  console.log(data);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="px-10 pb-24 ">
      <div className="flex items-center justify-center w-full pt-10">
        <Title
          title1="My "
          title2="Bookings"
          description="Our premium car wash service offers thorough exterior cleaning, interior vacuuming, waxing, and tire shining. We use eco-friendly products and provide express service for busy schedules. Enjoy spotless results with packages tailored to your vehicle's needs, ensuring satisfaction."
        />
      </div>
      {data?.data.length > 0 ? (
        <div className="grid justify-between min-h-screen grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:px-10 2xl:px-20 ">
          {data?.data?.map((item: TBookings) => (
            <BookingCard key={item._id} booking={item} />
          )) || []}
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center min-h-[50vh] text-4xl text-primary">
          <h1>No Data Available</h1>
          <Link to={"/available-slot"}>
            <Button
              variant="expandIcon"
              Icon={FaArrowRightLong}
              iconPlacement="right"
              className="text-white "
            >
              Book a Slot
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
