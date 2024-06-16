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
const Sample4 = lazy(() => import("@/pages/04_sample"));
const Sample5 = lazy(() => import("@/pages/05_sample"));
const Sample6 = lazy(() => import("@/pages/06_sample"));
const Sample7 = lazy(() => import("@/pages/07_sample"));
const Sample8 = lazy(() => import("@/pages/08_sample"));

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
    { path: "/04_sample", element: <Sample4 /> },
    { path: "/05_sample", element: <Sample5 /> },
    { path: "/06_sample", element: <Sample6 /> },
    { path: "/07_sample", element: <Sample7 /> },
    { path: "/08_sample", element: <Sample8 /> },
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
