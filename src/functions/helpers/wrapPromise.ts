// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
export function wrapPromise(promise: any) {
  let status = "pending";
  let result: any;
  const suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
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
        return result;
      }
    },
  };
}

// from: https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js
export function wrapPromiseForSwr<T extends { data?: any }>(
  promise: Promise<T>
) {
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
        return result as T;
        // return (result as T).data;
      }
      throw new Error("unknown status in wrapPromise");
    },
  };
}
