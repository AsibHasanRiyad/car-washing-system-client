import Loader from "@/components/shared/Loader";
import { SlotCard } from "@/components/shared/SlotCard";
import Title from "@/components/shared/Title";
import { useGetAllAvailableSlotsQuery } from "@/redux/features/slotApi";

export interface TSlotData {
  _id: string;
  serviceId: TService;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
}

export interface TService {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}
const AllSlot = () => {
  const { data, isFetching, isLoading, refetch } =
    useGetAllAvailableSlotsQuery(undefined);

  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="pb-10 bg-secondary">
      <div className="flex items-center justify-center w-full pt-10">
        <Title
          title1="All Available"
          title2="Slots"
          description="Our premium car wash service offers thorough exterior cleaning, interior vacuuming, waxing, and tire shining. We use eco-friendly products and provide express service for busy schedules. Enjoy spotless results with packages tailored to your vehicle's needs, ensuring satisfaction."
        />
      </div>
      {data?.data.length === 0 ? (
        <div className="flex items-center justify-center min-h-[70vh] text-4xl text-green-500">
          No Data Available
        </div>
      ) : (
        <div className="grid justify-between min-h-screen grid-cols-1 gap-10 px-8 md:grid-cols-2 lg:grid-cols-4 md:px-10 2xl:px-20 ">
          {data?.data?.map((slotData: TSlotData) => (
            <SlotCard
              key={slotData._id}
              refetch={refetch}
              slotData={slotData}
            />
          )) || "No available slots found"}
        </div>
      )}
    </div>
  );
};

export default AllSlot;
