import useSWR, { preload } from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

// https://swr.vercel.app/ja/docs/prefetching.ja
preload("child-with-preload-and-suspense", fetcher);

export const ChildWithPreloadAndSuspense = () => {
  const { data } = useSWR("child-with-preload-and-suspense", fetcher, {
    suspense: true,
  });

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
