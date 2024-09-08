import { baseApi } from "../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (slotInfo) => {
        return {
          url: "/slots/create-slot",
          method: "POST",
          body: slotInfo,
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

export const { useCreateSlotMutation, useGetAllServicesQuery } = slotApi;
