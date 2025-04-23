import React from "react";
import { Login } from "../login/Login";
import { Browse } from "../browse/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export const Body = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
