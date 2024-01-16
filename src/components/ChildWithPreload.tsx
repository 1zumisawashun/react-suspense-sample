import useSWR, { preload } from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

// https://swr.vercel.app/ja/docs/prefetching.ja
preload("child-with-preload", fetcher);

export const ChildWithPreload = () => {
  const { data } = useSWR("child-preload", fetcher);

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
