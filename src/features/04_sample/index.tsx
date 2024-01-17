import { ChildWithSuspense1 } from "@/features/04_sample/components/01_ChildWithSuspense";
import { ChildWithSuspense2 } from "@/features/04_sample/components/02_ChildWithSuspense";
import { ChildWithSuspense3 } from "@/features/04_sample/components/03_ChildWithSuspense";
import { Suspense } from "react";

export function Sample4() {
  return (
    <Suspense>
      <ChildWithSuspense1></ChildWithSuspense1>
      <ChildWithSuspense2></ChildWithSuspense2>
      <ChildWithSuspense3></ChildWithSuspense3>
    </Suspense>
  );
}
