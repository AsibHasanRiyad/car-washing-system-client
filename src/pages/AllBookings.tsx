import { useGetAllBookingsQuery } from "@/redux/features/bookingApi";

const AllBookings = () => {
  const { data, isFetching, isLoading } = useGetAllBookingsQuery(undefined);
  console.log(data);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias
      magni possimus totam aliquam doloremque impedit, quidem aperiam iste earum
      exercitationem unde cupiditate, qui, ea asperiores quisquam corrupti quo?
      Incidunt reprehenderit laboriosam nihil molestiae laudantium modi ad.
      Error sapiente sunt itaque voluptas dolore officia sint non, consequatur
      cumque id quia.
    </div>
  );
};

export default AllBookings;
