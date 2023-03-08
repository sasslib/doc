import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Flexbox from "./pages/Flexbox";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Base from "./pages/Base";
import PaddingMargin from "./pages/PaddingMargin";
import HeightWidth from "./pages/HeightWidth";
import Components from "./pages/Components";
import Borders from "./pages/Borders";

function Router() {
  const routes = createBrowserRouter([
    { path: `/docs`, element: <Home /> },
    { path: "/docs/references/base", element: <Base /> },
    { path: "/docs/references/flexbox", element: <Flexbox /> },
    { path: "/docs/references/colors", element: <Colors /> },
    { path: "/docs/references/padding&margin", element: <PaddingMargin /> },
    { path: "/docs/references/height&width", element: <HeightWidth /> },
    { path: "/docs/references/components", element: <Components /> },
    { path: "/docs/references/borders", element: <Borders /> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default Router;
