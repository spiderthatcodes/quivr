import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
Orders state: GLOBAL => Accessible to Reviews: Once and order is complete,
then there is an option to create a review.
*/

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),

  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Order"],
    }),

    getAllOrders: builder.query({
      query: () => "/orders",
      // transformResponse: (response) => response.orders,
      providesTags: ["Order"],
    }),

    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
    }),

    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        body: data,
        // body: { data },
        method: "PUT",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
} = ordersApi;
