import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export enum tagTypes {
  testTag = "TEST_TAG",
}

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.entries(tagTypes).map(type => type[1]),
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: () => ({}),
});

export default apiSlice;
