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

  const upcomingBookings = data?.data?.filter((booking: TBookings) => {
    console.log(booking, "inside booking");
    const bookingDateISO = new Date(booking.slot.date).toISOString();
    const bookingDateOnly = bookingDateISO.split("T")[0];
    return bookingDateOnly >= nowDateOnly;
  });

  return (
    <div>
      <Title title1="Upcoming" title2="Bookings" description="" />

      <div className="grid grid-cols-2 gap-6 px-6 py-10">
        {upcomingBookings?.length > 0 ? (
          upcomingBookings.map((booking: TBookings) => (
            <UpcomingBookingCard booking={booking} key={booking._id} />
          ))
        ) : (
          <p>No upcoming bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingBookings;
