import { Navigate } from "react-router-dom";
import Dashboard from "../componenets/pages/Dashboard";
import MiniDrawer from "../layout";
import { ROUTE_DEFINATION } from "../utils/constant/routes.constant";

export  const PrivateRoutes = {
    element: <MiniDrawer />,
    children: [
      {
        path: ROUTE_DEFINATION.BASE,
        title: ROUTE_DEFINATION.BASE,
        element: <Dashboard />,
      },
    

      {
        path: "*",
        title: "*",
        element: <Navigate to={ROUTE_DEFINATION.BASE} />,
      },
    ],
  };