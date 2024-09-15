import Loader from "@/components/shared/Loader";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/shared/Title";

import { useGetAllAvailableSlotsQuery } from "@/redux/features/slotApi";
import SlotTable from "@/components/Dashboard/SlotTable";
import { CreateSlot } from "@/components/Dashboard/CreateSlot";
import { TSlotData } from "../AllSlot";

const SlotManagement = () => {
  const { data, isLoading, isFetching, refetch } =
    useGetAllAvailableSlotsQuery(undefined);

  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="overflow-scroll max-w-[100vw] lg:px-10  hide-scrollbar">
      <div className="mt-5 ">
        <Title title1="Slot" title2="Management" description="" />
      </div>
      <div className="flex justify-end mb-5 lg:mr-14 ">
        <CreateSlot refetch={refetch} />
      </div>
      <Table className="text-base text-gray-100 ">
        <TableHeader>
          <TableRow className=" hover:bg-transparent">
            <TableHead>Service Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((slot: TSlotData) => (
            <SlotTable refetch={refetch} slot={slot} key={slot._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SlotManagement;
