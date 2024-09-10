import { TBookings } from "@/pages/AllBookings";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleUserRound, LocateFixedIcon, Mail, Phone } from "lucide-react";
import dayjs from "dayjs";
import Header from "./Header";

export function BookingCard({ booking }: { booking: TBookings }) {
  const date = booking?.slot?.date;
  const formatDate = (isoDate: string) => {
    return dayjs(isoDate).format("DD-MM-YYYY");
  };
  const formattedDate = formatDate(date);
  return (
    <div>
      <Card className="text-white border-none drop-shadow-md shadow-gray-700 bg-third ">
        <CardHeader>
          <CardTitle>
            <Header title={booking?.service?.name} size="text-xl" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 space-x-4 border border-gray-800 rounded-md ">
            <div className="space-y-1.5">
              <h1 className="flex gap-2 font-semibold ">
                <span>
                  <CircleUserRound />
                </span>
                {booking?.customer?.name}{" "}
              </h1>
              <h1 className="flex gap-2 ">
                <span>
                  <Mail />
                </span>
                {booking?.customer?.email}
              </h1>
              <h1 className="flex gap-2 ">
                <span>
                  <Phone />
                </span>
                {booking?.customer?.phone}
              </h1>
              <h1 className="flex gap-2 ">
                <span>
                  <LocateFixedIcon />
                </span>
                {booking?.customer?.address}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3 ">
            <div className="space-y-2 ">
              <Header title=" Booking Details " size=" text-lg "></Header>

              <h1>
                <span className="font-semibold text-white">Date: </span>
                <span className="text-text">{formattedDate}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">Start Time: </span>
                <span className="text-text">{booking?.slot?.startTime}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">End Time: </span>
                <span className="text-text">{booking?.slot?.endTime}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">Price: </span>
                <span className="text-text">{booking?.service?.price}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">Duration: </span>
                <span className="text-text">{booking?.service?.duration}</span>
              </h1>
            </div>
            <div className="space-y-2">
              <Header title=" Vehicle Information" size=" text-lg"></Header>
              <h1>
                <span className="font-semibold text-white">Vehicle Type: </span>
                <span className="text-text">{booking?.vehicleType}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">
                  Vehicle Brand:{" "}
                </span>
                <span className="text-text">{booking?.vehicleBrand}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">
                  Vehicle Model:{" "}
                </span>
                <span className="text-text">{booking?.vehicleModel}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">
                  Manufacturing Year:{" "}
                </span>
                <span className="text-text">{booking?.manufacturingYear}</span>
              </h1>
              <h1>
                <span className="font-semibold text-white">
                  Registration Plate:{" "}
                </span>
                <span className="text-text">{booking?.registrationPlate}</span>
              </h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
