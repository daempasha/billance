// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const billanceApi = createApi({
  reducerPath: "billanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: () => ({}),
});
