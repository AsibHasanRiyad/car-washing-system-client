import { TableCell, TableRow } from "@/components/ui/table";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

// import "../Dashboard/";

import { Button } from "@/components/ui/button";
import { truncateDescription } from "@/utils/TruncateDescripion";
import { TService } from "@/pages/CreateService";
import Loader from "../shared/Loader";
import "../../pages/Dashboard/dashboard.css";

import { DeleteService } from "./DeleteServiceModal";
import { UpdateService } from "./UpdateService";

const ServiceTable = ({
  service,
  refetch,
}: {
  service: TService;
  refetch: () => void;
}) => {
  const { shortDescription, isTruncated } = truncateDescription(
    service?.description || ""
  );

  if (!service) {
    return <Loader />;
  }
  return (
    <>
      <TableRow className=" hover:bg-transparent" key={service._id}>
        <TableCell className="font-medium w-52">{service.name}</TableCell>
        {/* <TableCell className="w-2/5 ">{service.description}</TableCell> */}
        <TableCell className="w-full lg:w-2/5">
          {shortDescription}{" "}
          {isTruncated && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant="link"
                  className="px-0 text-blue-500 hover:underline"
                >
                  See More
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-secondary text-neutral-400">
                <div className="space-y-2 ">
                  <p className="text-sm">{service?.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </TableCell>
        <TableCell className=" whitespace-nowrap">
          {service.duration} Minutes
        </TableCell>
        <TableCell className=" whitespace-nowrap">$ {service.price}</TableCell>
        <TableCell>
          <UpdateService refetch={refetch} service={service as TService} />
        </TableCell>
        <TableCell>
          {" "}
          <DeleteService id={service._id as string} refetch={refetch} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ServiceTable;
