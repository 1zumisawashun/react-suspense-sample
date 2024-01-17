import { ChildWithSuspense1 } from "@/features/04_sample/components/01_ChildWithSuspense";
import { ChildWithSuspense2 } from "@/features/04_sample/components/02_ChildWithSuspense";
import { Suspense } from "react";
import { useSWR } from "@/functions/libs/swr";
import { fetchPosts } from "@/functions/helpers/fetchPosts";
import { fetchUser } from "@/functions/helpers/fetchUser";

export function Sample4() {
  const resource1 = useSWR("fetch-posts", fetchPosts);
  const resource2 = useSWR("fetch-user", fetchUser);

  return (
    <>
      <Suspense>
        <ChildWithSuspense1 resource={resource1}></ChildWithSuspense1>
      </Suspense>
      <Suspense>
        <ChildWithSuspense2 resource={resource2}></ChildWithSuspense2>
      </Suspense>
    </>
  );
}
