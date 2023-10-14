import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./server/queryClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "category/:name",
    element: <Category />,
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
