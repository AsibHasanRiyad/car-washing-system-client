import Header from "@/components/shared/Header";
import Loader from "@/components/shared/Loader";
import Title from "@/components/shared/Title";

import { useGetSingleServiceQuery } from "@/redux/features/serviceApi";
import { useGetAllAvailableSlotsQuery } from "@/redux/features/slotApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/authSlice";

type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  _id?: string;
};
type TSlot = {
  serviceId: TService;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
  _id?: string;
};

const SingleServices = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { id } = useParams();
  const { data, isFetching, isLoading } = useGetSingleServiceQuery(id);
  const { data: AllSlots } = useGetAllAvailableSlotsQuery(undefined);
  const role = useAppSelector(useCurrentUser);

  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null); // State to store selected slot ID

  const targetedSlot = AllSlots?.data?.filter((data: TSlot) => {
    return data?.serviceId?._id === id;
  });

  const handleSelect = (slotId: string) => {
    setSelectedSlotId(slotId);
    console.log("Selected Slot ID:", slotId);
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-10">
      <Title title1="Service" title2="Details" description="" />
      <div className="flex flex-col gap-5 my-10 lg:flex-row ">
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
            </dl>
          </div>
        </div>
        <div className="border border-primary divider lg:divider-horizontal"></div>

        {/* slot */}
        <div className="flex-1 h-full text-white ">
          <Header title="Available Slots" size=" text-2xl text-center" />
          <div className="grid grid-cols-2 gap-5 mt-4">
            {targetedSlot?.map((slot: TSlot) => (
              <button
                key={slot._id}
                onClick={() => handleSelect(slot._id!)}
                className={`p-2.5 flex flex-col gap-2 rounded-lg border 
                ${
                  selectedSlotId === slot._id
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent border-text"
                } 
                hover:border-primary hover:bg-primary transition-all duration-300 transform disabled:bg-neutral-600 disabled:border-neutral-600 disabled:cursor-not-allowed`}
                disabled={
                  slot.isBooked === "booked" || slot.isBooked === "canceled"
                }
              >
                <h1>Date: {dateFormatter(slot.date)}</h1>
                <div className="flex gap-4">
                  <h1>Start Time: {slot.startTime}</h1>
                  <h1>End Time: {slot.endTime}</h1>
                </div>
              </button>
            ))}
          </div>

          {selectedSlotId && (role?.role as string) === "user" && (
            <div className="flex items-end justify-end h-full mt-8">
              <Link to={`/bookings/${id}/${selectedSlotId}`}>
                <Button>Book This Slot</Button>
              </Link>
            </div>
          )}
          {selectedSlotId && !role && (
            <div className="flex items-end justify-end h-full mt-8">
              <Link to={"/signin"}>
                <Button>Book This Slot</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
