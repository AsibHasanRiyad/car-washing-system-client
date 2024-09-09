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
    getAllServices: builder.query({
      query: () => {
        return {
          url: "/services",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateBookingMutation, useGetAllServicesQuery } = bookingApi;
