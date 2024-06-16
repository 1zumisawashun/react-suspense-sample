import useSWR, { preload } from "swr";
import { fetcher } from "@/functions/helpers/fetcher";

/**
 * preloadすることでrender-as-you-fetchの挙動になっている。
 * よしこさんのコメントのようにswrにpreloadを組み込む方法もある（けど、これpreloadがない時の対処法かも）
 * @see https://github.com/vercel/swr/discussions/2331
 * @see https://zenn.dev/aidiot_dev/articles/20231026-useeffect-waterfall#comment-534ff866cc75bc
 */

// https://swr.vercel.app/ja/docs/prefetching.ja
preload("child-with-preload", fetcher);
preload("parent-with-preload", fetcher);

const ChildWithPreload = () => {
  const { data } = useSWR("child-with-preload", fetcher, { suspense: true });
  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};

function ParentWithPreload() {
  const { data } = useSWR("parent-with-preload", fetcher, { suspense: true });
  console.log(`render Parent (${JSON.stringify(data)})`);

  return (
    <div>
      <div>{data?.data}</div>
      {data && <ChildWithPreload />}
    </div>
  );
}

export default function Page() {
  return <ParentWithPreload></ParentWithPreload>;
}
