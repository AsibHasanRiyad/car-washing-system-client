import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Title from "@/components/shared/Title";
import { useGetAllUsersQuery } from "@/redux/features/authApi";
import { SelectUserRole } from "@/components/Dashboard/SelectUserRole";
import { PaginationCard } from "@/components/shared/Pagination";
import { useState } from "react";

type TUser = {
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin";
  address: string;
  _id: string;
};

export function AllUser() {
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading, refetch } = useGetAllUsersQuery([
    { name: "limit", value: 8 },
    { name: "page", value: page },
  ]);
  console.log(data?.data);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-5 lg:px-10 ">
      <Title title1="User" title2="Management" description="" />
      <Table className="text-white ">
        <TableHeader>
          <TableRow className=" hover:bg-transparent">
            <TableHead> Name</TableHead>
            <TableHead> Email</TableHead>
            <TableHead> Phone</TableHead>
            <TableHead> Address</TableHead>
            <TableHead> Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((user: TUser) => (
            <TableRow
              className="cursor-pointer whitespace-nowrap hover:bg-transparent"
              key={user._id}
            >
              <TableCell className="font-medium text-primary">
                {user.name}
              </TableCell>

              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <SelectUserRole
                userId={user._id}
                role={user.role}
                refetch={refetch}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-10 ">
        <PaginationCard
          currentPage={page}
          totalPages={data?.meta?.totalPage || 1}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
