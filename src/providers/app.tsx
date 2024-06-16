import { RouterProvider } from "react-router-dom";
import { router } from "@/routers/app.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export function AppProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<p>...</p>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </QueryClientProvider>
  );
}
