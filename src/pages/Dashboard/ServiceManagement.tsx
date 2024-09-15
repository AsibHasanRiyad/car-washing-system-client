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

import { CreateService } from "@/components/Dashboard/CreateService";
import { PaginationCard } from "@/components/shared/Pagination";
import { useState } from "react";

const ServiceManagement = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, refetch } = useGetAllServicesQuery([
    { name: "limit", value: 6 },
    { name: "page", value: page },
  ]);
  console.log(data);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="overflow-scroll max-w-[100vw] lg:px-10 hide-scrollbar">
      <div className="mt-5 ">
        <Title title1="Service" title2="Management" description="" />
      </div>
      <div className="flex justify-end mb-5 lg:mr-14 ">
        <CreateService refetch={refetch} />
      </div>
      <Table className="text-base text-gray-100 ">
        <TableHeader>
          <TableRow className=" hover:bg-transparent">
            <TableHead>Service Name</TableHead>
            <TableHead className="hidden lg:block">Details</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((service: TService) => (
            <ServiceTable service={service} key={service._id} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-10 ">
        <PaginationCard
          currentPage={page}
          totalPages={data?.meta?.totalPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ServiceManagement;
