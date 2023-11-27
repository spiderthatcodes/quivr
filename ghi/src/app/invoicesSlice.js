import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
Invoices state: GLOBAL => Once an invoice is created, it should ADD a new Order
to the Orders list
*/

export const invoicesApi = createApi({
  reducerPath: "invoicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  tagTypes: ["Invoice"],
  endpoints: (builder) => ({
    createInvoice: builder.mutation({
      query: (data) => ({
        url: "/invoices",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Invoice"],
    }),

    getAllInvoices: builder.query({
      query: () => "/invoices",
      providesTags: ["Invoice"],
    }),

    getInvoiceById: builder.query({
      query: (id) => `/invoices/${id}`,
    }),
  }),
});

export const {
  useCreateInvoiceMutation,
  useGetAllInvoicesQuery,
  useGetInvoiceByIdQuery,
} = invoicesApi;
