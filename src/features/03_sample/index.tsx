import { ParentWithSuspense } from "@/components/ParentWithSuspense";
import { Suspense } from "react";

export function Sample3() {
  return (
    <Suspense>
      <ParentWithSuspense></ParentWithSuspense>
    </Suspense>
  );
}
