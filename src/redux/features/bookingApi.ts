import { TQueryParams } from "@/pages/GetAllServices";
import { baseApi } from "../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => {
        return {
          url: "/bookings",
          method: "POST",
          body: bookingInfo,
        };
      },
      invalidatesTags: ["MyBookings"],
    }),
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["AllBookings"],
    }),
    getMyBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/my-bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["MyBookings"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingApi;
