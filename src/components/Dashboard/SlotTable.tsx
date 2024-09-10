import { TableCell, TableRow } from "@/components/ui/table";

import Loader from "../shared/Loader";
import "../../pages/Dashboard/dashboard.css";

import { TSlotData } from "@/pages/AllSlot";
import { SelectSlotStatus } from "./SelectSlotStatus";
export type TStatus = "booked" | "canceled" | "available";
const SlotTable = ({
  slot,
  refetch,
}: {
  slot: TSlotData;
  refetch: () => void;
}) => {
  if (!slot) {
    return <Loader />;
  }
  return (
    <>
      <TableRow className=" hover:bg-transparent" key={slot._id}>
        <TableCell className="font-medium w-52">
          {slot.serviceId.name}
        </TableCell>

        <TableCell className=" whitespace-nowrap">
          {slot.serviceId.duration} Minutes
        </TableCell>
        <TableCell className=" whitespace-nowrap">
          $ {slot.serviceId.price}
        </TableCell>
        <TableCell className=" whitespace-nowrap">$ {slot.date}</TableCell>
        <TableCell className=" whitespace-nowrap">{slot.startTime}</TableCell>
        <TableCell className=" whitespace-nowrap">{slot.endTime}</TableCell>

        <TableCell>
          <SelectSlotStatus
            refetch={refetch}
            slotId={slot._id}
            status={slot.isBooked as TStatus}
          />
        </TableCell>
      </TableRow>
    </>
  );
};

export default SlotTable;
