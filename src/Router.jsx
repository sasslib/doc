import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  const routes = createBrowserRouter([
    { path: `${import.meta.env.VITE_PUBLIC_BASE_URL}/`, element: <Home /> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default Router;
