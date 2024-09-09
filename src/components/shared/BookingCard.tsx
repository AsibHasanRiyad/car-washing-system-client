import { TBookings } from "@/pages/AllBookings";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleUserRound, LocateFixedIcon, Mail, Phone } from "lucide-react";
import dayjs from "dayjs";

export function BookingCard({ booking }: { booking: TBookings }) {
  const date = booking?.slot?.date;
  const formatDate = (isoDate: string) => {
    return dayjs(isoDate).format("DD-MM-YYYY");
  };
  const formattedDate = formatDate(date);
  return (
    <div>
      <Card className="h-full bg-white shadow-2xl shadow-gray-600 text-secondary drop-shadow-xl">
        <CardHeader>
          <CardTitle className="text-black ">
            {booking?.service?.name}
          </CardTitle>
          {/* <CardDescription>
            <ScrollArea className="h-[65px] border-none  rounded-md border mt-2 ">
              hello
            </ScrollArea>
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="p-4 space-x-4 border border-black rounded-md ">
            <div className="space-y-1 ">
              <h1 className="flex gap-2 font-semibold ">
                <span>
                  <CircleUserRound />
                </span>
                {booking?.customer?.name}{" "}
              </h1>
              <h1 className="flex gap-2 text-muted-foreground ">
                <span>
                  <Mail />
                </span>
                {booking?.customer?.email}
              </h1>
              <h1 className="flex gap-2 text-muted-foreground ">
                <span>
                  <Phone />
                </span>
                {booking?.customer?.phone}
              </h1>
              <h1 className="flex gap-2 text-muted-foreground ">
                <span>
                  <LocateFixedIcon />
                </span>
                {booking?.customer?.address}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3 ">
            <div className="space-y-1 ">
              <h1>
                <span className="font-semibold text-black">Date: </span>
                <span className="text-muted-foreground">{formattedDate}</span>
              </h1>
              <h1>
                <span className="font-semibold text-black">Start Time: </span>
                <span className="text-muted-foreground">
                  {booking?.slot?.startTime}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">End Time: </span>
                <span className="text-muted-foreground">
                  {booking?.slot?.endTime}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">Price: </span>
                <span className="text-muted-foreground">
                  {booking?.service?.price}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">Duration: </span>
                <span className="text-muted-foreground">
                  {booking?.service?.duration}
                </span>
              </h1>
            </div>
            <div className="space-y-1">
              <h1>
                <span className="font-semibold text-black">Vehicle Type: </span>
                <span className="text-muted-foreground">
                  {booking?.vehicleType}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">
                  Vehicle Brand:{" "}
                </span>
                <span className="text-muted-foreground">
                  {booking?.vehicleBrand}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">
                  Vehicle Model:{" "}
                </span>
                <span className="text-muted-foreground">
                  {booking?.vehicleModel}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">
                  Manufacturing Year:{" "}
                </span>
                <span className="text-muted-foreground">
                  {booking?.manufacturingYear}
                </span>
              </h1>
              <h1>
                <span className="font-semibold text-black">
                  Registration Plate:{" "}
                </span>
                <span className="text-muted-foreground">
                  {booking?.registrationPlate}
                </span>
              </h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
