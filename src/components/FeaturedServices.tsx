import { ArrowRightIcon, DollarSign, Timer } from "lucide-react";
import Title from "./shared/Title";
import { Button } from "./ui/button";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "@/pages/CreateService";
import { Link } from "react-router-dom";

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
            <div
              key={service._id}
              className="p-8 space-y-3 border cursor-pointer border-neutral-800 hover:shadow-lg hover:shadow-black bg-neutral-900/50 rounded-xl"
            >
              <h1 className="text-xl font-semibold capitalize text-primary">
                {service.name}
              </h1>

              <p className="flex items-center gap-2 text-justify text-text ">
                {service.description}
              </p>
              <p className="flex items-center gap-2 text-text ">
                <DollarSign className=" text-primary" /> {service.price}
              </p>
              <p className="flex items-center gap-2 text-text ">
                {" "}
                <Timer className=" text-primary" /> {service.duration} Hours
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to={"/all-services"}>
          <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            className="text-white "
          >
            See more
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
