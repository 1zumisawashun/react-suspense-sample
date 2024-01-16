import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */

const App = lazy(() => import("@/pages/App"));
const Sample1 = lazy(() => import("@/pages/01_sample"));
const Sample2 = lazy(() => import("@/pages/02_sample"));
const Sample3 = lazy(() => import("@/pages/03_sample"));

function Layout() {
  return (
    <Suspense>
      <ScrollRestoration />
      <Outlet />
    </Suspense>
  );
}

function children() {
  const isLocalhost = document.location.hostname === "localhost";

  const catalogRoutes = isLocalhost ? [] : [];

  const publicRoutes = [
    { path: "/", element: <App /> },
    { path: "/01_sample", element: <Sample1 /> },
    { path: "/02_sample", element: <Sample2 /> },
    { path: "/03_sample", element: <Sample3 /> },
  ];

  return [...catalogRoutes, ...publicRoutes];
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: children(),
  },
]);
