import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const postApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    posts: builder.query<>(),
  }),
});
