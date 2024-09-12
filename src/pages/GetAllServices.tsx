import Loader from "@/components/shared/Loader";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "./CreateService";
import Title from "@/components/shared/Title";

import ServiceCard2 from "@/components/shared/ServiceCard2";

const GetAllServices = () => {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);
  // console.log(data?.data);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="p-10 pb-24 bg-secondary">
      <div className="flex items-center justify-center w-full">
        <Title
          title1="All"
          title2="Services"
          description="Professional exterior cleaning with high-pressure jets and premium soaps, leaving your vehicle spotless and gleaming."
        />
      </div>
      {data?.data.length > 0 ? (
        <div className="grid justify-between grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:px-10 2xl:px-20 ">
          {data?.data.map((service: TService) => (
            <ServiceCard2 service={service} key={service._id} />
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
