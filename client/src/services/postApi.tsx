import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";

export const postApi = createApi({
  reducerPath: "postApi", // Unique key for the API slice reducer
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    singlepost: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { usePostsQuery, useSinglepostQuery } = postApi;

export default postApi;
