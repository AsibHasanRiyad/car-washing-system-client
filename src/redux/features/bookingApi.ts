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
    }),
    getAllBookings: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
    }),
    getMyBookings: builder.query({
      query: () => {
        return {
          url: "/my-bookings",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingApi;
