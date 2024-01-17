import { ParentWithPreloadAndSuspense } from "@/features/06_sample/components/ParentWithPreloadAndSuspense";

/**
 * @description 次の記事を参考に実装した。通常のswrはレンダー後にフェッチすることを確認することができる
 * @see https://zenn.dev/aidiot_dev/articles/20231026-useeffect-waterfall#comment-534ff866cc75bc
 */
export function Sample6() {
  return <ParentWithPreloadAndSuspense></ParentWithPreloadAndSuspense>;
}
