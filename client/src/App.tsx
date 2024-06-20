import "./App.css";
import { usePostsQuery } from "./services/postApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();

  data && console.log(data);

  return (
    <>
      <div className="app">
        <h1>React Redux Toolkit RTK Query</h1>
        {isLoading && <h2>Loading...</h2>}
        {isFetching && <h2>Fetching...</h2>}
        {error && <h2>Something went wrong..</h2>}
        {isSuccess && (
          <div>
            {data?.map((post) => {
              return (
                <>
                  <div className="data" key={post.id}>
                    <span>{post.title}</span>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
