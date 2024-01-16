import { RouterProvider } from "react-router-dom";
import { router } from "@/routers/app.tsx";

export function AppProvider() {
  return <RouterProvider router={router} />;
}
