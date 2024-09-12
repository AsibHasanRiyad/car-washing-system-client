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
    getSingleService: builder.query({
      query: (payload) => {
        return {
          url: `/services/${payload}`,
          method: "GET",
        };
      },
    }),
    deleteService: builder.mutation({
      query: (id) => {
        // console.log(id);
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateService: builder.mutation({
      query: (payload) => {
        const { _id, ...data } = payload;
        // console.log(_id);
        return {
          url: `/services/${_id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useGetSingleServiceQuery,
} = serviceApi;
