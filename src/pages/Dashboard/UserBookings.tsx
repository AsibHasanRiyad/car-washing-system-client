import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";
import { TBookings } from "../AllBookings";
import Title from "@/components/shared/Title";
import dayjs from "dayjs";
import { PaginationCard } from "@/components/shared/Pagination";
import { useState } from "react";

export function UserBookings() {
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading } = useGetAllBookingsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
  ]);
  // console.log(data?.data?.meta?.totalPage, "bookings");
  if (isFetching || isLoading) {
    return <Loader />;
  }
  const formatDate = (isoDate: string) => {
    return dayjs(isoDate).format("DD-MM-YYYY");
  };
  return (
    <div className="mt-5 lg:px-10 ">
      <Title title1="User" title2="Bookings" description="" />
      <Table className="text-white ">
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Booking Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.result?.map((booking: TBookings) => (
            <TableRow
              className="cursor-pointer whitespace-nowrap hover:bg-transparent"
              key={booking._id}
            >
              <TableCell className="font-medium text-primary">
                {booking.service.name}
              </TableCell>
              <TableCell className=" whitespace-nowrap">
                {booking.service.duration / 60} Hours
              </TableCell>
              <TableCell className=" whitespace-nowrap">
                $ {booking.service.price}
              </TableCell>
              <TableCell>{booking.customer.name}</TableCell>
              <TableCell>{booking.customer.email}</TableCell>
              <TableCell>{formatDate(booking.slot.date)}</TableCell>
              <TableCell>{booking.slot.startTime}</TableCell>
              <TableCell>{booking.slot.endTime}</TableCell>
              <TableCell className="capitalize ">
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
