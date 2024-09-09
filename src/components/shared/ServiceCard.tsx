import { TService } from "@/pages/CreateService";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/authSlice";

const MAX_WORD_COUNT = 20;

const ServiceCard = ({ service }: { service: TService }) => {
  const user = useAppSelector(useCurrentUser)?.role;
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > MAX_WORD_COUNT) {
      return {
        shortDescription: words.slice(0, MAX_WORD_COUNT).join(" ") + "...",
        isTruncated: true,
      };
    }
    return {
      shortDescription: description,
      isTruncated: false,
    };
  };

  const { shortDescription, isTruncated } = truncateDescription(
    service?.description || ""
  );

  return (
    <div className="relative rounded-md space-y-8 bg-white p-8 shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] dark:bg-[#18181B] md:w-full lg:w-[300px]">
      {/* Top Part */}
      <div>
        {/* Price Ribbon SVG */}
        <div className="absolute -right-[20px] -top-4 ">
          <div className="relative w-full h-full">
            {/* svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="120"
              height="120"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <defs>
                <linearGradient
                  id="skyGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#0095FF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#87CEFA", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z"
                  style={{ fill: "url(#skyGradient)" }}
                />
                <path
                  d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z"
                  style={{ fill: "#1976d2" }}
                />
              </g>
            </svg>
            {/* Price */}
            <div className="absolute flex flex-col text-xl font-semibold text-white left-7 top-8">
              <span>
                <span>${service?.price}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-5 text-slate-800 dark:text-[#139DFE]">
          {service?.name}
        </h3>
        <div className="h-32 ">
          <p className="inline text-sm">
            {shortDescription}{" "}
            {isTruncated && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="link"
                    className="text-blue-500 hover:underline"
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
          </p>
        </div>

        <div className="flex justify-center pt-4">
          {user === "admin" && (
            <Link to={"/create-slot"}>
              <Button
                variant="expandIcon"
                Icon={FaArrowRightLong}
                iconPlacement="right"
                className="px-16 py-5 text-white bg-black rounded-full hover:bg-gray-900"
              >
                Create Slot
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
