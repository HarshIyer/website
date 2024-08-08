import React from "react";
import ReactDOM from "react-dom/client";
import App, { VitepressWrapper } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./projects/App.tsx";
import ErrorPage from "./error-page.tsx";
import ContactPage from "./contact/App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <VitepressWrapper />,
  },
  {
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-black overflow-auto h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
