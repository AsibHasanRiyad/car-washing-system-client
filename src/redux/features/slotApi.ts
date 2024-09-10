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
    updateSlot: builder.mutation({
      query: (payload) => {
        const { _id, ...newStatus } = payload;
        console.log(payload, "slot payload");
        console.log(_id);
        return {
          url: `/slots/${_id}`,
          method: "PATCH",
          body: newStatus,
        };
      },
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllAvailableSlotsQuery,
  useUpdateSlotMutation,
} = slotApi;
