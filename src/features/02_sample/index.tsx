import { ParentWithPreload } from "@/components/ParentWithPreload";

/**
 * @description 次の記事を参考に実装した。通常のswrはレンダー後にフェッチすることを確認することができる
 * @see https://zenn.dev/aidiot_dev/articles/20231026-useeffect-waterfall#comment-534ff866cc75bc
 */
export function Sample2() {
  return <ParentWithPreload></ParentWithPreload>;
}
