import Title from "@/components/shared/Title";
import { useGetAllUsersQuery } from "@/redux/features/authApi";
import { userCurrentUserDetails } from "@/redux/features/authSlice";
import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { useGetAllAvailableSlotsQuery } from "@/redux/features/slotApi";
import { useAppSelector } from "@/redux/hook";
import {
  Bookmark,
  CalendarArrowDownIcon,
  Contact,
  Home,
  Mail,
  ShoppingCart,
  User,
  UserCircle,
  Users,
} from "lucide-react";

const DashboardHome = () => {
  const data = useAppSelector(userCurrentUserDetails);
  const { data: allUser } = useGetAllUsersQuery(undefined);
  const { data: allSlots } = useGetAllAvailableSlotsQuery(undefined);
  const { data: allBookings } = useGetAllBookingsQuery(undefined);
  const { data: allServices } = useGetAllServicesQuery(undefined);
  const totalUser = allUser?.data?.length || null;
  const totalSlots = allSlots?.data?.length || null;
  const totalServices = allServices?.data?.length || null;
  const totalBookings = allBookings?.data?.length || null;
  return (
    <div>
      <Title
        title1="User"
        title2="Profile"
        description="Share your experience by providing feedback and rating. Your input helps us improve and serve you better."
      />
      <div className="container p-5 mx-auto my-5">
        <div className="flex flex-col gap-5 lg:flex-row no-wrap ">
          <div className="w-full lg:w-3/12 ">
            {/* main profile */}

            <div className="h-full py-10 border cursor-pointer text-text bg-third border-neutral-800 rounded-xl">
              <div className="flex flex-col items-center pb-10">
                <UserCircle className="w-16 h-16 text-white " />
                <h5 className="mt-2 mb-1 text-xl font-medium">
                  {data?.userName}
                </h5>
                <span className="text-sm text-primary ">{data?.role}</span>
              </div>
            </div>
          </div>
          {/* profile details */}
          <div className="w-full lg:w-9/12">
            <div className="h-full border cursor-pointer bg-third border-neutral-800 rounded-xl">
              <div className="text-text">
                {/* main  */}
                <div className="grid py-8 lg:py-16 md:grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <User />
                      Name :{" "}
                    </div>
                    <div className="px-4 py-2">{data?.userName}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Contact /> Contact No :
                    </div>
                    <div className="px-4 py-2">{data?.phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Home /> Address :
                    </div>
                    <div className="px-4 py-2">{data?.address}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Mail /> Email :
                    </div>
                    <div className="px-4 py-2">
                      <p>{data?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
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
      </div>
    </div>
  );
};

export default DashboardHome;
