import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://car-washing-system-server-cyan.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;
    if (token) {
      const tokenWithoutBearer = token.startsWith("Bearer ")
        ? token.slice(7)
        : token;
      headers.set("Authorization", tokenWithoutBearer);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["AllBookings", "MyBookings", "allRatings", "services"],
});
