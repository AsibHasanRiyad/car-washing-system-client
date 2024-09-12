import { baseApi } from "../api/baseApi";

const ratingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (payload) => {
        return {
          url: "/ratings/create-ratings",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["allRatings"],
    }),
    getAllRatings: builder.query({
      query: () => {
        return {
          url: "/ratings",
          method: "GET",
        };
      },
      providesTags: ["allRatings"],
    }),
  }),
});

export const { useCreateRatingMutation, useGetAllRatingsQuery } = ratingApi;
