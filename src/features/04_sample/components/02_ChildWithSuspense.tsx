export const ChildWithSuspense2 = ({ resource }: any) => {
  const data = resource.read(); // throw proimse

  console.log(`render Child (${JSON.stringify(data)})`);

  return <h1>{data.name}</h1>;
};
