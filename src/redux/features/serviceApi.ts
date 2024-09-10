import { baseApi } from "../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceInfo) => {
        return {
          url: "/services/create-service",
          method: "POST",
          body: serviceInfo,
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
    deleteService: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useDeleteServiceMutation,
} = serviceApi;
