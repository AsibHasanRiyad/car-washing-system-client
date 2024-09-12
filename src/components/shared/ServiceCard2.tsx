import { TService } from "@/pages/CreateService";
import { DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard2 = ({ service }: { service: TService }) => {
  return (
    <Link to={`/service-details/${service._id}`}>
      <div className="h-full p-8 space-y-3 border cursor-pointer border-neutral-800 hover:shadow-lg hover:shadow-black bg-neutral-900/50 rounded-xl">
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
          <Timer className=" text-primary" /> {service.duration / 60} Hours
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard2;
