import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reviewsApi } from "./reviewsSlice";
import { authApi } from "./authSlice";
import { ordersApi } from "./ordersSlice";
import { invoicesApi } from "./invoicesSlice";

export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer, // orders state
    [invoicesApi.reducerPath]: invoicesApi.reducer, // invoices state
    [reviewsApi.reducerPath]: reviewsApi.reducer, // reviews state
    [authApi.reducerPath]: authApi.reducer, // auth state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(reviewsApi.middleware)
      .concat(authApi.middleware)
      .concat(ordersApi.middleware)
      .concat(invoicesApi.middleware),
});

setupListeners(store.dispatch);
