import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-washing-system-server-cyan.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
