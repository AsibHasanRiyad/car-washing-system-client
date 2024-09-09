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
  const { data, isFetching, isLoading } =
    useGetAllAvailableSlotsQuery(undefined);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className=" bg-secondary">
      <div className="flex items-center justify-center w-full pt-10">
        <Title
          title1="All Available"
          title2="Slots"
          description="Students will develop a secure blockchain-based voting system that ensures the integrity and transparency of elections. They will need to implement blockchain technology to record votes securely and allow voters to verify their choices. This project will also explore cryptographic concepts and smart contracts."
        />
      </div>
      <div className="grid justify-between grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-10 2xl:px-20 ">
        {data?.data?.map((slotData: TSlotData) => (
          <SlotCard key={slotData._id} slotData={slotData} />
        )) || "No available slots found"}
      </div>
    </div>
  );
};

export default AllSlot;
