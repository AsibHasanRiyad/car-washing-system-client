import { useGetAllServicesQuery } from "@/redux/features/serviceApi";
import { TService } from "./CreateService";
import Title from "@/components/shared/Title";
import ServiceCard2 from "@/components/shared/ServiceCard2";
import { useEffect, useState } from "react";
import { PaginationCard } from "@/components/shared/Pagination";
import PriceRange from "@/components/shared/PriceRange";
import { SortBy } from "@/components/shared/SortBy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

const GetAllServices = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("price");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetAllServicesQuery([
    { name: "limit", value: 6 },
    { name: "page", value: page },
    { name: "sort", value: sortBy || "price" },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
    { name: "searchTerm", value: searchTerm },
  ]);
  console.log(data, "services");
  const handlePriceRangeChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleSelectSort = (data: string) => {
    setSortBy(data);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const resetParams = async () => {
    console.log("reset");
    setSortBy("price");
    setMaxPrice(1000);
    setMinPrice(0);
    setSearchTerm("");
    handleSearch();
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-screen p-2 pb-24 overflow-hidden sm:p-10 bg-secondary">
      <div className="flex items-center justify-center w-full">
        <Title
          title1="All"
          title2="Services"
          description="Professional exterior cleaning with high-pressure jets and premium soaps, leaving your vehicle spotless and gleaming."
        />
      </div>
      <div className="flex flex-col gap-10 px-4 py-10 xl:flex-row md:px-10 2xl:px-20">
        {/* search and other logic */}
        <div className="pr-0 xl:pr-10 space-y-4 xl:border-r 2xl:min-w-[350px] border-r-neutral-800">
          <div className="flex items-center w-full gap-2 ">
            <Input
              type="text"
              placeholder="Name"
              className="w-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="text-white bg-primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-5 md:flex-row xl:flex-col ">
            <div className="flex flex-col items-start gap-3 font-medium text-primary ">
              <p className="text-xl ">Sort By:</p>
              <SortBy handleSelectSort={handleSelectSort} />
            </div>
            <div className="flex flex-col items-start pb-4 space-y-8 font-medium">
              <h1 className="text-xl text-primary ">Price Range:</h1>
              <PriceRange onPriceRangeChange={handlePriceRangeChange} />
            </div>
          </div>
          <Button
            onClick={() => resetParams()}
            className="w-full bg-primary hover:bg-primary"
          >
            Reset All
          </Button>
        </div>

        {/* content */}
        <div>
          {data?.data.length > 0 ? (
            <div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3 ">
              {data?.data.map((service: TService) => (
                <ServiceCard2 service={service} key={service._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[60vh] text-4xl text-primary">
              No Data Available
            </div>
          )}
          <div className="mt-10 ">
            <PaginationCard
              currentPage={page}
              totalPages={data?.meta?.totalPage || 1}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllServices;
