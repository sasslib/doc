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
    { path: "/sasslib", element: <Home /> },
    { path: "/sasslib/references/base", element: <Base /> },
    { path: "/sasslib/references/flexbox", element: <Flexbox /> },
    { path: "/sasslib/references/colors", element: <Colors /> },
    { path: "/sasslib/references/padding&margin", element: <PaddingMargin /> },
    { path: "/sasslib/references/height&width", element: <HeightWidth /> },
    { path: "/sasslib/references/components", element: <Components /> },
    { path: "/sasslib/references/borders", element: <Borders /> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default Router;
