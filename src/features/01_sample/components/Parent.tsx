import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";
import { Child } from "@/features/01_sample/components/Child";

export function Parent() {
  const { data } = useSWR("parent", fetcher);
  console.log(`render Parent (${JSON.stringify(data)})`);
  return (
    <div>
      <div>{data?.data}</div>
      {data && <Child />}
    </div>
  );
}
