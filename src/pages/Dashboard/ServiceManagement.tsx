import Loader from "@/components/shared/Loader";
import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "../CreateService";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ServiceTable from "@/components/Dashboard/ServiceTable";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import { CreateService } from "@/components/Dashboard/CreateService";

const ServiceManagement = () => {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);

  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="w-screen overflow-scroll hide-scrollbar">
      <div className="mt-5 ">
        <Title title1="Service" title2="Management" description="" />
      </div>
      <div className="flex justify-end mb-5 mr-14 ">
        <CreateService />
      </div>
      <Table className="text-base text-gray-100 ">
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Create Slot</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((service: TService) => (
            <ServiceTable service={service} key={service._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceManagement;
