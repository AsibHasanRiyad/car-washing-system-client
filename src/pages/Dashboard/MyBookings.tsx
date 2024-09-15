import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyBookingsQuery } from "@/redux/features/bookingApi";
import { TBookings } from "../AllBookings";
import Title from "@/components/shared/Title";
import { dateFormatter } from "@/utils/dateFormatter";
import { PaginationCard } from "@/components/shared/Pagination";
import { useState } from "react";

export function MyBookingsDashboard() {
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading } = useGetMyBookingsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
  ]);

  if (isFetching || isLoading) {
    return <Loader />;
  }

  // Filter out bookings where slot.isBooked is 'canceled'
  const filteredBookings = data?.data?.result?.filter(
    (booking: TBookings) => booking.slot.isBooked !== "available"
  );

  return (
    <div className="mt-5 lg:px-10">
      <Title title1="My" title2="Bookings" description="" />
      <Table className="text-white 2xl:text-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Booking Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBookings?.map((booking: TBookings) => (
            <TableRow
              className="cursor-pointer hover:bg-transparent"
              key={booking._id}
            >
              <TableCell className="font-medium text-primary">
                {booking.service.name}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {booking.service.duration / 60} Hours
              </TableCell>
              <TableCell className="whitespace-nowrap">
                $ {booking.service.price}
              </TableCell>
              <TableCell>{dateFormatter(booking.slot.date)}</TableCell>
              <TableCell>{booking.slot.startTime}</TableCell>
              <TableCell>{booking.slot.endTime}</TableCell>
              <TableCell className="capitalize">
                {booking.slot.isBooked}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-10 ">
        <PaginationCard
          currentPage={page}
          totalPages={data?.data?.meta?.totalPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
