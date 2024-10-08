import { TQueryParams } from "@/pages/GetAllServices";
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
      invalidatesTags: ["services"],
    }),
    getAllServices: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/services`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["services"],
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
      invalidatesTags: ["services"],
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
      invalidatesTags: ["services"],
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
