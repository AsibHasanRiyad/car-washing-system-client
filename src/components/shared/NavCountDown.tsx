import { TBookings } from "@/pages/AllBookings";

import { useGetMyBookingsQuery } from "@/redux/features/bookingApi";
import { combineDateAndTime } from "@/utils/CombineDateAndTime";
import Countdown from "react-countdown";
import { TRenderProps } from "../Dashboard/UpcomingBookingCard";

const NavCountDown = () => {
  const { data, isFetching, isLoading } = useGetMyBookingsQuery(undefined);

  const nowISO = new Date().toISOString();
  const nowDateOnly = nowISO.split("T")[0];
  let lastBooking;
  const upcomingBookings = data?.data?.filter((booking: TBookings) => {
    // console.log(booking);
    if (!booking?.slot?.date) {
      return false;
    }
    const bookingDateISO = new Date(booking?.slot?.date).toISOString();
    const bookingDateOnly = bookingDateISO.split("T")[0];
    return (
      bookingDateOnly >= nowDateOnly &&
      booking.slot.isBooked !== "canceled" &&
      booking.slot.isBooked !== "available"
    );
  });

  if (isFetching || isLoading) {
    return (
      <div className="w-8 h-8 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-primary"></div>
    );
  }

  if (data?.data?.length === 0) {
    return null;
  }

  if (!upcomingBookings || upcomingBookings.length === 0) {
    return null;
  } else {
    lastBooking = upcomingBookings[upcomingBookings.length - 1];
  }

  if (!lastBooking?.slot?.date || !lastBooking?.slot?.startTime) {
    return null;
  }

  const renderer = ({ days, hours, minutes, seconds }: TRenderProps) => {
    return (
      <div className="grid grid-flow-col text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-lg countdown">{days}</span>
          <span className="text-sm">days</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-lg countdown">{hours}</span>
          <span className="text-sm">hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-lg countdown">{minutes}</span>
          <span className="text-sm">minutes</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-lg countdown">{seconds}</span>
          <span className="text-sm">sec</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Countdown
        renderer={renderer}
        date={combineDateAndTime(
          lastBooking?.slot.date,
          lastBooking?.slot.startTime
        )}
      />
    </div>
  );
};

export default NavCountDown;
