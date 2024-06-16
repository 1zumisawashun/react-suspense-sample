import useSWR from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

/**
 * fetch-then-render（fetch-on-render）の挙動になっている。
 * 通常のswrはレンダー後にフェッチする。
 * @see https://zenn.dev/aidiot_dev/articles/20231026-useeffect-waterfall#comment-534ff866cc75bc
 */

function Parent() {
  const { data } = useSWR("parent", fetcher);
  console.log(`render Parent (${JSON.stringify(data)})`);

  return (
    <div>
      <div>{data?.data}</div>
      {data && <Child />}
    </div>
  );
}

const Child = () => {
  const { data } = useSWR("child", fetcher);
  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};

export default function Page() {
  return <Parent />;
}
