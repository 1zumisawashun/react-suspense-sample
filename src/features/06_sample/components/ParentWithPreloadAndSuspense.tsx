import useSWR, { preload } from "swr";
import { fetcher } from "@/functions/helpers/fetcher";
import { ChildWithPreloadAndSuspense } from "@/features/06_sample/components/ChildWithPreloadAndSuspense";
import { Suspense } from "react";

// https://swr.vercel.app/ja/docs/prefetching.ja
preload("parent-with-preload-and-suspense", fetcher);

export function ParentWithPreloadAndSuspense() {
  const { data } = useSWR("parent-with-preload-and-suspense", fetcher, {
    suspense: true,
  });
  console.log(`render Parent (${JSON.stringify(data)})`);
  return (
    <div>
      <div>{data?.data}</div>
      <Suspense>
        <ChildWithPreloadAndSuspense />
      </Suspense>
    </div>
  );
}
