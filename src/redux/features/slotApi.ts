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
    getAllAvailableSlots: builder.query({
      query: () => {
        return {
          url: "/slots/availability",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateSlotMutation, useGetAllAvailableSlotsQuery } = slotApi;
