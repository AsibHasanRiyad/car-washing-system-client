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
          description="Our premium car wash service offers thorough exterior cleaning, interior vacuuming, waxing, and tire shining. We use eco-friendly products and provide express service for busy schedules. Enjoy spotless results with packages tailored to your vehicle's needs, ensuring satisfaction."
        />
      </div>
      {data?.data.length > 0 ? (
        <div className="grid justify-between grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-10 2xl:px-20 ">
          {data?.data.map((item: TService) => (
            <ServiceCard service={item} key={item._id} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh] text-4xl text-primary">
          No Data Available
        </div>
      )}
    </div>
  );
};

export default GetAllServices;
