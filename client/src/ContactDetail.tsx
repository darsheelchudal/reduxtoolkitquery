import { useSinglepostQuery } from "./services/postApi";

export const SinglePost = ({ id }: { id: string }) => {
  const { data } = useSinglepostQuery(id);

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};
