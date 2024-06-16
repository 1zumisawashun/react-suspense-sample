import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";
import { Suspense } from "react";

/**
 * suspenseモードにすることでrender-as-you-fetchの挙動になっている。
 * preloadしなくてもrender-as-you-fetchの挙動になる。
 * けれどネストしているのでwaterfall問題は残っている
 * @see https://zenn.dev/aidiot_dev/articles/20231026-useeffect-waterfall#comment-534ff866cc75bc
 */
export function Sample3() {
  return (
    <Suspense>
      <ParentWithSuspense></ParentWithSuspense>
    </Suspense>
  );
}

function ParentWithSuspense() {
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

const ChildWithSuspense = () => {
  const { data } = useSWR("child-with-suspense", fetcher, { suspense: true });
  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
