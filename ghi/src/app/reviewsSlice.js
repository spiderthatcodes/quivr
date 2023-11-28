import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    /*
    Users ????

    Reviews state: GLOBAL => Accessible to Orders. Once a review is submitted then
    the option to 'add review' disappears from available options
*/

    createReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        body: data,
        method: "post",
      }),
      invalidatesTags: ["Review"],
    }),

    getAllReviews: builder.query({
      query: () => "/reviews",
      providesTags: ["Review"],
    }),

    getReviewById: builder.query({
      query: (id) => `/reviews/${id}`,
    }),

    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        body: data,
        // body: { data },
        method: "put",
      }),
      invalidatesTags: ["Review"],
    }),

    deleteReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        body: data,
        // body: { data },
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Review"],
      //   invalidatesTags: (response, error, arg) => {
      //     console.log({ response, error, arg });
      //     return [
      //       { type: "Review", id: id },
      //       { type: "Review", id: arg.order_id },
      //     ];
      //   },
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
