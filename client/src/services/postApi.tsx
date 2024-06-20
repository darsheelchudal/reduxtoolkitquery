import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";

const postApi = createApi({
  reducerPath: "postApi", // Unique key for the API slice reducer
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { usePostsQuery } = postApi; // Correctly export the generated hook

export default postApi;
