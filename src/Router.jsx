import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Components from "./pages/Components";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";

function Router() {
  const routes = createBrowserRouter([
    { path: `${import.meta.env.VITE_PUBLIC_BASE_URL}/`, element: <Home /> },
    {
      path: `${import.meta.env.VITE_PUBLIC_BASE_URL}/getting-started`,
      element: <GettingStarted />,
    },
    {
      path: `${import.meta.env.VITE_PUBLIC_BASE_URL}/components`,
      element: <Components />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default Router;
