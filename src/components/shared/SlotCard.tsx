import { Cog, CalendarDays, Clock } from "lucide-react";
import dayjs from "dayjs";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TSlotData } from "@/pages/AllSlot";
import { ScrollArea } from "../ui/scroll-area";

export function SlotCard({ slotData }: { slotData: TSlotData }) {
  const duration = slotData?.serviceId?.duration;
  const durationInHours = duration / 60;
  const date = slotData?.date;
  const formatDate = (isoDate: string) => {
    return dayjs(isoDate).format("DD-MM-YYYY");
  };
  const formattedDate = formatDate(date);
  console.log(formattedDate);

  return (
    <Card className="bg-white text-secondary drop-shadow-xl">
      <CardHeader>
        <CardTitle className="text-black ">
          {slotData?.serviceId?.name}
        </CardTitle>
        <CardDescription>
          <ScrollArea className="h-[65px] border-none  rounded-md border mt-2 ">
            {slotData?.serviceId?.description}
          </ScrollArea>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center p-4 space-x-4 border border-black rounded-md ">
          <Cog />
          <div className="flex-1 space-y-1">
            <p className="font-medium leading-none ">
              Price: ${slotData?.serviceId?.price}
            </p>
            <p className="text-muted-foreground">
              Duration: {durationInHours} Hours
            </p>
          </div>
        </div>
        <div className="space-y-2.5 ">
          <h1 className="flex gap-2 font-semibold ">
            {" "}
            <span>
              <CalendarDays />
            </span>{" "}
            Date: {formattedDate}{" "}
          </h1>
          <h1 className="flex gap-2 font-semibold ">
            {" "}
            <span>
              <Clock />
            </span>{" "}
            Start Time: {slotData?.startTime}
          </h1>
          <h1 className="flex gap-2 font-semibold ">
            {" "}
            <span>
              <Clock />
            </span>{" "}
            End Time: {slotData?.endTime}
          </h1>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-white bg-secondary hover:bg-secondary hover:text-white">
          Book
        </Button>
      </CardFooter>
    </Card>
  );
}
