import { useGetAllUsersQuery } from "@/redux/features/authApi";
import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { useGetAllAvailableSlotsQuery } from "@/redux/features/slotApi";
import {
  Bookmark,
  CalendarArrowDownIcon,
  ShoppingCart,
  Users,
} from "lucide-react";

const AdminStats = () => {
  const { data: allUser } = useGetAllUsersQuery(undefined);
  const { data: allSlots } = useGetAllAvailableSlotsQuery(undefined);
  const { data: allBookings } = useGetAllBookingsQuery(undefined);
  const { data: allServices } = useGetAllServicesQuery(undefined);
  const totalUser = allUser?.data?.length || null;
  const totalSlots = allSlots?.data?.length || null;
  const totalServices = allServices?.data?.length || null;
  const totalBookings = allBookings?.data?.result?.length || null;
  // console.log(allBookings, "total bookings");
  return (
    <section className="h-full py-6 mt-10 border cursor-pointer text-text bg-third border-neutral-800 rounded-xl">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <ShoppingCart className="w-12 h-12 text-primary " />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold ">{totalServices} +</p>
            <p className="capitalize">Available Services</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <CalendarArrowDownIcon className="w-12 h-12 text-primary " />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold ">{totalSlots} +</p>
            <p className="capitalize">Available Slots</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <Bookmark className="w-12 h-12 text-primary " />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold ">{totalBookings} +</p>
            <p className="capitalize">On going Bookings</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <Users className="w-12 h-12 text-primary " />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold ">{totalUser} + </p>
            <p className="capitalize">Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminStats;
