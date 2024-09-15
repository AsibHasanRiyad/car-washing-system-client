import { ArrowRightIcon } from "lucide-react";
import Title from "./shared/Title";
import { Button } from "./ui/button";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "@/pages/CreateService";
import { Link } from "react-router-dom";
import ServiceCard2 from "./shared/ServiceCard2";

const FeaturedServices = () => {
  const { data } = useGetAllServicesQuery(undefined);
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <Title
          title1=" Explore our"
          title2="  Car Wash Services"
          description=" We offer a range of professional car wash services tailored to meet
          your needs. Below are some of our most popular services."
        />

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {data?.data?.slice(0, 6)?.map((service: TService) => (
            <ServiceCard2 service={service} key={service._id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to={"/all-services"}>
          <Button className="text-white bg-primary hover:bg-primary ">
            See more
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
