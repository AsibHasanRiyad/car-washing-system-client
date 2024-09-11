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

export function UserBookings() {
  const { data, isFetching, isLoading } = useGetAllBookingsQuery(undefined);
  console.log(data?.data);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-5 ">
      <Title title1="User" title2="Management" description="" />
      <Table className="text-lg text-white ">
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
          {data?.data?.map((booking: TBookings) => (
            <TableRow
              className="cursor-pointer hover:bg-transparent"
              key={booking._id}
            >
              <TableCell className="font-medium text-primary">
                {booking.service.name}
              </TableCell>
              <TableCell>{booking.service.duration} Hours</TableCell>
              <TableCell>$ {booking.service.price}</TableCell>
              <TableCell>{booking.customer.name}</TableCell>
              <TableCell>{booking.customer.email}</TableCell>
              <TableCell>{booking.slot.date}</TableCell>
              <TableCell>{booking.slot.startTime}</TableCell>
              <TableCell>{booking.slot.endTime}</TableCell>
              <TableCell className="uppercase ">
                {booking.slot.isBooked}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
