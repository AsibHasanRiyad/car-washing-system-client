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
      query: () => {
        return {
          url: "/auth/users",
          method: "GET",
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
