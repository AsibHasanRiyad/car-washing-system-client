import { BookingCard } from "@/components/shared/BookingCard";
import Loader from "@/components/shared/Loader";

import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";
import { TService } from "./CreateService";
import { TSlot } from "./CreateSlot";
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
      <div className="grid justify-between grid-cols-4 gap-10 ">
        {data?.data?.map((item: TBookings) => (
          <BookingCard key={item._id} booking={item} />
        )) || []}
      </div>
    </div>
  );
};

export default AllBookings;
