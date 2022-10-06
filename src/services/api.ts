import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Device = {
  sysids: string[];
  icon: {
    resolutions: [number, number][];
    id: string;
  };
  line: {
    name: string;
    id: string;
  };
  product: {
    name: string;
    abbrev: string;
  };
  shortnames: string[];
  triplets: [{ [key: string]: string }];
  sysid?: string;
};

export type Api = {
  version: string;
  devices: Device[];
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Api, void>({
      query: () => "",
    }),
  }),
});

export const { useGetProductsQuery } = api;
