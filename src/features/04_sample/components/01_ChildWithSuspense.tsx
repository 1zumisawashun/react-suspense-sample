export const ChildWithSuspense1 = ({ resource }: any) => {
  console.log(resource)
  const data = resource.read(); // throw promise

  console.log(`render Child (${JSON.stringify(data)})`);

  return (
    <ul>
      {data.map((post: any) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};
