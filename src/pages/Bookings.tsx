import Title from "@/components/shared/Title";
import { useGetSingleServiceQuery } from "@/redux/features/serviceApi";
import { useGetSingleSlotQuery } from "@/redux/features/slotApi";
import { dateFormatter } from "@/utils/dateFormatter";

import { useParams } from "react-router-dom";

import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import { MdPhoneIphone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import { userCurrentUserDetails } from "@/redux/features/authSlice";
import Loader from "@/components/shared/Loader";

const Bookings = () => {
  const { id, slotId } = useParams();
  const { data, isFetching, isLoading } = useGetSingleServiceQuery(id);
  const { data: slotData } = useGetSingleSlotQuery(slotId);
  const currentUser = useAppSelector(userCurrentUserDetails);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  console.log(currentUser);
  return (
    <div className="p-10">
      <Title title1="Booking" title2="Details" description="" />
      <div className="flex gap-5 my-10 ">
        <div className="flex-1 ">
          <div className="flow-root py-3 rounded-lg shadow-sm">
            <dl className="-my-3 text-sm divide-y divide-neutral-800">
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Name</dt>
                <dd className="text-text sm:col-span-2">{data?.data?.name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Duration</dt>
                <dd className="text-text sm:col-span-2">
                  {data?.data?.duration / 60} hour
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Price</dt>
                <dd className="text-text sm:col-span-2">
                  $ {data?.data?.price}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Description</dt>
                <dd className="text-text sm:col-span-2">
                  {data?.data?.description}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Date</dt>
                <dd className="text-text sm:col-span-2">
                  {dateFormatter(slotData.data.date)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">Start Time</dt>
                <dd className="text-text sm:col-span-2">
                  {slotData.data.startTime}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-third sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-primary">End Time</dt>
                <dd className="text-text sm:col-span-2">
                  {slotData.data.endTime}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="border border-primary divider lg:divider-horizontal"></div>

        {/* slot */}
        <div className="flex-1 text-white ">
          <form className="w-full max-w-lg mx-auto">
            <div>
              <label className="block mb-2 text-xs text-white">Full Name</label>
              <div className="relative flex items-center">
                <input
                  defaultValue={currentUser?.userName}
                  type="text"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter name"
                />
                <IoPersonCircle className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Email</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  defaultValue={currentUser?.email}
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter email"
                />
                <MdOutlineMailOutline className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Address</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  defaultValue={currentUser?.address}
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter address"
                />
                <MdPhoneIphone className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Phone</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  defaultValue={currentUser?.phone}
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter Phone"
                />
                <IoLocation className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <Button className="mt-5 ">Pay Now</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
