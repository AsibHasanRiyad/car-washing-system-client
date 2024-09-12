import { TBookings } from "@/pages/AllBookings";
import { combineDateAndTime } from "@/utils/CombineDateAndTime";
import { dateFormatter } from "@/utils/dateFormatter";
import { Calendar, CircleDollarSign, Hourglass, TimerIcon } from "lucide-react";
import Countdown from "react-countdown";
import Header from "../shared/Header";
export type TRenderProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const UpcomingBookingCard = ({ booking }: { booking: TBookings }) => {
  const finalISODate = combineDateAndTime(
    booking.slot.date,
    booking.slot.startTime
  );

  // Countdown renderer function
  const renderer = ({ days, hours, minutes, seconds }: TRenderProps) => {
    // Render the countdown
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl md:text-5xl countdown">
            {days}
          </span>
          <span>days</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl md:text-5xl countdown">
            {hours}
          </span>
          <span>hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl md:text-5xl countdown">
            {minutes}
          </span>
          <span>minutes</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl md:text-5xl countdown">
            {seconds}
          </span>
          <span>sec</span>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-8 border cursor-pointer lg:px-12 border-neutral-600 text-text rounded-xl">
      {/* Countdown component */}
      <div className="flex justify-center py-2">
        <Countdown date={finalISODate} renderer={renderer} />
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="px-5 pb-5">
        <div className="flex flex-col items-center py-4 text-center">
          <Header size="text-3xl" title={booking.service.name} />
          <p className="flex items-center gap-2 mt-2 text-gray-300 ">
            <CircleDollarSign /> {booking.service.price}
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 mt-6 md:items-center md:flex-row">
          <div className="space-y-4 ">
            <p className="flex items-center gap-2 ">
              <TimerIcon className=" text-primary" /> Start Time:{" "}
              {booking.slot.startTime}
            </p>
            <p className="flex items-center gap-2 ">
              <TimerIcon className=" text-primary" /> End Time:{" "}
              {booking.slot.endTime}
            </p>
          </div>
          <div className="space-y-4 ">
            <p className="flex items-center gap-2 ">
              <Calendar className=" text-primary" /> Start Date:{" "}
              {dateFormatter(booking.slot.date)}
            </p>
            <p className="flex items-center gap-2 ">
              <Hourglass className=" text-primary" /> Duration:{" "}
              {booking.service.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookingCard;
