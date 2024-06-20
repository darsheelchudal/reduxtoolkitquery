import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";

export const postApi = createApi({
  reducerPath: "postApi", // Unique key for the API slice reducer
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    singlepost: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
      providesTags: ["Post"],
    }),
    addPost: builder.mutation<void, Post>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation<void, Post>({
      query: (id, ...rest) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  usePostsQuery,
  useSinglepostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;

export default postApi;
