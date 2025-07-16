import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";
import Features from "../Pages/Features/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashboardHome />,
  //     },
  //   ],
  // },
]);

export default router;
