import { Fetcher } from "swr";

export const fetcher: Fetcher<{ data: string }, string> = async (
  key: string
) => {
  console.log("fetching started : " + key);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("fetching completed");
  return { data: key };
};
