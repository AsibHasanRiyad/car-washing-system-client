import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateSlotMutation } from "@/redux/features/slotApi";
import { TStatus } from "./SlotTable";
import { toast } from "sonner";

// Example status array with id and value
const statusOptions = [
  { id: "1", value: "available" },
  { id: "2", value: "canceled" },
];

export function SelectSlotStatus({
  slotId,
  status,
  refetch,
}: {
  slotId: string;
  status: TStatus;
  refetch: () => void;
}) {
  const [selectedStatus, setSelectedStatus] = useState<string>(status);
  const [updateSlot, { isLoading }] = useUpdateSlotMutation();

  const handleStatusChange = async () => {
    if (!selectedStatus) return;

    const updatedData = {
      _id: slotId,
      newStatus: selectedStatus,
    };

    try {
      const res = await updateSlot(updatedData).unwrap();
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
        refetch();
      }
    } catch (error) {
      toast.error(error.data.message as string);
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`text-white min-w-28  ${
            status === "booked"
              ? "bg-green-500 cursor-not-allowed"
              : "bg-primary"
          }
          ${status === "canceled" && "bg-red-500"} 
          ${isLoading ? "opacity-50" : ""}`}
          disabled={status === "booked"}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Slot Status</DialogTitle>
          <DialogDescription>
            Select the new status for the slot from the options below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            value={selectedStatus}
            onValueChange={(value) => setSelectedStatus(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Change slot status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status Options</SelectLabel>
                {statusOptions.map((statusOption) => (
                  <SelectItem key={statusOption.id} value={statusOption.value}>
                    {statusOption.value.charAt(0).toUpperCase() +
                      statusOption.value.slice(1)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button
            onClick={handleStatusChange}
            className="text-white bg-primary"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
