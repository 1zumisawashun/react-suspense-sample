import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

export const ChildWithSuspense2 = () => {
  const { data } = useSWR("child-with-suspense-2", fetcher, { suspense: true });

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
