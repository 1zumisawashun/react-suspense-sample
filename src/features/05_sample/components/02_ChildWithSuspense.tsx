import { useSWR } from "@/functions/libs/swr";
import { fetcher } from "@/functions/helpers/fetcher";

export const ChildWithSuspense2 = () => {
  const resource = useSWR("child-with-suspense-5", fetcher);
  const data = resource.read(); // throw proimse

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
