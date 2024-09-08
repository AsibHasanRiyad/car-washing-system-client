import Loader from "@/components/shared/Loader";
import ServiceCard from "@/components/shared/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "./CreateService";
import Title from "@/components/shared/Title";

const GetAllServices = () => {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);
  console.log(data?.data);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="p-10 pb-24 bg-secondary">
      <div className="flex items-center justify-center w-full">
        <Title
          title1="All"
          title2="Services"
          description="Students will develop a secure blockchain-based voting system that ensures the integrity and transparency of elections. They will need to implement blockchain technology to record votes securely and allow voters to verify their choices. This project will also explore cryptographic concepts and smart contracts."
        />
      </div>
      <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
        {data?.data?.map((item: TService) => (
          <ServiceCard service={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default GetAllServices;
