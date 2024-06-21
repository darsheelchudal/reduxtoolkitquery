import "./App.css";
import {
  usePostsQuery,
  useSinglepostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./services/postApi";
import { Post } from "./services/postApi"; // Ensure you import the Post interface

function App() {
  const { data } = usePostsQuery();

  data && console.log(data);

  return (
    <>
      <div className="app">
        <h1>React Redux Toolkit RTK Query</h1>

        <div>
          {data?.map((post) => {
            return (
              <div className="data" key={post.id}>
                <span>{post.title}</span>
                <span>
                  <SinglePost id={post.id.toString()} />
                </span>
              </div>
            );
          })}
          <div>
            <AddPost />
          </div>
        </div>
      </div>
    </>
  );
}

export const SinglePost = ({ id }: { id: string }) => {
  const { data } = useSinglepostQuery(id);

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};

export const AddPost = () => {
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const initialPost: Post = { id: "1", title: "Darsheel", views: 100 };

  const updatedPost: Post = { id: "6", title: "Shisha", views: 600 };

  const addHandler = async () => {
    await addPost(initialPost);
  };

  const updateHandler = async () => {
    await updatePost(updatedPost);
  };

  const deleteHandler = async () => {
    await deletePost(String(initialPost.id)); // Pass the id as a string
  };

  return (
    <>
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={updateHandler}>Update</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </>
  );
};

export default App;
