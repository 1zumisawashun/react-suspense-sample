import { useSuspenseQuery } from "@tanstack/react-query";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

async function fetchRepoData(name: string) {
  console.log("start fetch " + name + Date.now());
  const response = await fetch(`https://api.github.com/repos/${name}`);
  await sleep(getRandomDelay(250, 900));
  if (!response.ok) {
    throw new Error("fetch failed");
  }
  return { name };
}

export function useRepoData(name: string) {
  return useSuspenseQuery({
    queryKey: ["repoData", name],
    queryFn: () => fetchRepoData(name),
  });
}
