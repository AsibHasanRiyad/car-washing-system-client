import ServiceCard from "@/components/shared/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";

const GetAllServices = () => {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);
  console.log(data?.data);
  return (
    <div className="grid grid-cols-4 gap-10 justify-evenly ">
      {data?.data?.map((item) => (
        <ServiceCard key={item._id} />
      ))}
    </div>
  );
};

export default GetAllServices;
