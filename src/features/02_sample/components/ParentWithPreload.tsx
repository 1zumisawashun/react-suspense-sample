import useSWR, { preload } from "swr";
import { fetcher } from "@/functions/helpers/fetcher";
import { ChildWithPreload } from "@/features/02_sample/components/ChildWithPreload";

// https://swr.vercel.app/ja/docs/prefetching.ja
preload("parent-with-preload", fetcher);

export function ParentWithPreload() {
  const { data } = useSWR("parent-with-preload", fetcher, { suspense: true });
  console.log(`render Parent (${JSON.stringify(data)})`);
  return (
    <div>
      <div>{data?.data}</div>
      {data && <ChildWithPreload />}
    </div>
  );
}
