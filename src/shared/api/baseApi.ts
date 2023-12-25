import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { favoritesMiddleware } from "@/entities/favorites/api/favoritesMiddleware";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org" }),

  endpoints: () => ({}),
});