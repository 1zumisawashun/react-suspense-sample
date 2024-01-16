import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

export const Child = () => {
  const { data } = useSWR("child", fetcher);

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
