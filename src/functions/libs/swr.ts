import useRawSWR, { mutate } from "swr";

const useSWR = <Data>(
  key: string,
  fetcher: (args: any) => Data | Promise<Data>
) => {
  try {
    const res = useRawSWR<Data>(key, fetcher);
    // If the data is in swr's cache
    return { read: () => res.data as Data };
  } catch (promiseOrError) {
    if ((typeof promiseOrError as any).then === "function") {
      return wrapPromise<{ data: Data }>(promiseOrError as any);
    }
    throw promiseOrError;
  }
};

// from: https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js
function wrapPromise<T extends { data?: any }>(promise: Promise<T>) {
  let status: "success" | "pending" | "error" = "pending";
  let result: T | Error;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return (result as T).data;
      }
      throw new Error("unknown status in wrapPromise");
    },
  };
}

export { useSWR, mutate };
