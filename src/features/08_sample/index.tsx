import { useRepoData } from "./hooks/useRepoData";

/** @see https://zenn.dev/mylifeasjosh/articles/d12e231adbde15 */
function RepoData({ name }: { name: string }) {
  const { data } = useRepoData(name);

  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
}

export function Sample8() {
  return (
    <>
      <RepoData name="tanstack/query" />
      <RepoData name="tanstack/table" />
    </>
  );
}
