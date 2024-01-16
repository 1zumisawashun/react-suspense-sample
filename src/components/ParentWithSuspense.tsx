import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";
import { ChildWithSuspense } from "@/components/ChildWithSuspense";
import { Suspense } from "react";

export function ParentWithSuspense() {
  const { data } = useSWR("parent-with-suspense", fetcher, { suspense: true });
  console.log(`render Parent (${JSON.stringify(data)})`);
  return (
    <div>
      <div>{data?.data}</div>
      <Suspense fallback={<p>loading parent with suspense...</p>}>
        <ChildWithSuspense />
      </Suspense>
    </div>
  );
}
