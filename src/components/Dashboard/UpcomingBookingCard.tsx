import { TBookings } from "@/pages/AllBookings";
import { combineDateAndTime } from "@/utils/CombineDateAndTime";
import Countdown from "react-countdown";
type TRenderProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const UpcomingBookingCard = ({ booking }: { booking: TBookings }) => {
  const finalISODate = combineDateAndTime(
    booking.slot.date,
    booking.slot.startTime
  );

  // Countdown renderer function
  const renderer = ({ days, hours, minutes, seconds }: TRenderProps) => {
    // Render the countdown
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">{days}</span>
          <span>days</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">{hours}</span>
          <span>hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">{minutes}</span>
          <span>minutes</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">{seconds}</span>
          <span>sec</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Countdown component */}
      <Countdown date={finalISODate} renderer={renderer} />

      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src="/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {booking.service.name}
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* Render stars for the rating */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < 4
                    ? "text-yellow-300"
                    : "text-gray-200 dark:text-gray-600"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookingCard;
