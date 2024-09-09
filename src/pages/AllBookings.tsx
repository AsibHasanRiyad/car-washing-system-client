import { BookingCard } from "@/components/shared/BookingCard";
import Loader from "@/components/shared/Loader";

import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";
import { TService } from "./CreateService";
import { TSlot } from "./CreateSlot";
import Title from "@/components/shared/Title";
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

const AllBookings = () => {
  const { data, isFetching, isLoading } = useGetAllBookingsQuery(undefined);
  console.log(data);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="p-10 pb-24 ">
      <div className="flex items-center justify-center w-full pt-10">
        <Title
          title1="All "
          title2="Bookings"
          description="Students will develop a secure blockchain-based voting system that ensures the integrity and transparency of elections. They will need to implement blockchain technology to record votes securely and allow voters to verify their choices. This project will also explore cryptographic concepts and smart contracts."
        />
      </div>
      {data?.data.length > 0 ? (
        <div className="grid justify-between min-h-screen grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-10 2xl:px-20 ">
          {data?.data?.map((item: TBookings) => (
            <BookingCard key={item._id} booking={item} />
          )) || []}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[70vh] text-4xl text-green-500">
          No Data Available
        </div>
      )}
    </div>
  );
};

export default AllBookings;
