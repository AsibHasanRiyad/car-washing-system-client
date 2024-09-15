import { TQueryParams } from "@/pages/GetAllServices";
import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/auth/users",
          method: "GET",
          params: params,
        };
      },
    }),
    updateUserRole: builder.mutation({
      query: (payload) => {
        const { selectedRole, id } = payload;

        return {
          url: `/auth/users/${id}`,
          method: "PATCH",
          body: {
            role: selectedRole,
          },
        };
      },
    }),
    updateUserProfile: builder.mutation({
      query: (data) => {
        const { _id, ...userData } = data;
        return {
          url: `/auth/user-profile/${_id}`,
          method: "PATCH",
          body: {
            ...userData,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserProfileMutation,
} = authApi;
