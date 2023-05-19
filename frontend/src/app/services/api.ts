import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GroceryItem {
  _id: number;
  name: string;
  purchased: boolean;
}

type ItemsResponse = GroceryItem[];

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}/grocerylist`,
  }),
  tagTypes: ["groceries"],
  endpoints: (build) => ({
    getItems: build.query<ItemsResponse, void>({
      query: () => ({ url: "" }),
      providesTags: ["groceries"],
    }),
    addItem: build.mutation<GroceryItem, GroceryItem>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["groceries"],
    }),
    purchaseItem: build.mutation<GroceryItem, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["groceries"],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation, usePurchaseItemMutation } =
  api;
