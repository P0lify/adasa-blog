import { useEffect } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ArticleDetails from "./pages/ArticleDetails";
import About from "./pages/About";
//
import NotFound from "./pages/NotFound";
import MainLayout from "./Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <ArticleDetails /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
