import Loader from "@/components/shared/Loader";
import { useGetMyBookingsQuery } from "@/redux/features/bookingApi";
import { TBookings } from "../AllBookings";

import Title from "@/components/shared/Title";
import UpcomingBookingCard from "@/components/Dashboard/UpcomingBookingCard";

const UpcomingBookings = () => {
  const { data, isFetching, isLoading } = useGetMyBookingsQuery(undefined);

  if (isFetching || isLoading) {
    return <Loader />;
  }

  const nowISO = new Date().toISOString();
  const nowDateOnly = nowISO.split("T")[0];

  const upcomingBookings = data?.data?.result?.filter((booking: TBookings) => {
    const bookingDateISO = new Date(booking.slot.date).toISOString();
    const bookingDateOnly = bookingDateISO.split("T")[0];

    return (
      bookingDateOnly >= nowDateOnly &&
      booking.slot.isBooked !== "canceled" &&
      booking.slot.isBooked !== "available"
    );
  });

  return (
    <div className=" lg:px-10">
      <Title title1="Upcoming" title2="Bookings" description="" />

      <div className="grid h-full grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-2">
        {upcomingBookings.map((booking: TBookings) => (
          <UpcomingBookingCard booking={booking} key={booking._id} />
        ))}
      </div>
      {upcomingBookings.length === 0 && (
        <p className="flex items-center justify-center h-[55vh] text-3xl text-primary ">
          No bookings available
        </p>
      )}
    </div>
  );
};

export default UpcomingBookings;
