import { Navigate } from "react-router-dom";
import Profile from "../componenets/pages";
import AddProduct from "../componenets/pages/Add-Product";
import Categories from "../componenets/pages/Categories";
import Dashboard from "../componenets/pages/Dashboard";
import MiniDrawer from "../layout";
import { ROUTE_DEFINATION } from "../utils/constant/routes.constant";

const ProfileRoutes = {
  path: ROUTE_DEFINATION.PROFILE,
  title: ROUTE_DEFINATION.PROFILE,
  children: [
    {
      path: ROUTE_DEFINATION.PROFILE,
      title: ROUTE_DEFINATION.PROFILE,
      element: <Profile />,
    },
  ],
};
const CategoriesRoutes = {
  path: ROUTE_DEFINATION.CATEGORIES,
  title: ROUTE_DEFINATION.CATEGORIES,
  children: [
    {
      path: ROUTE_DEFINATION.CATEGORIES,
      title: ROUTE_DEFINATION.CATEGORIES,
      element: <Categories />,
    },
  ],
};
const AddProductRoutes = {
  path: ROUTE_DEFINATION.ADD_PRODUCT,
  title: ROUTE_DEFINATION.ADD_PRODUCT,
  children: [
    {
      path: ROUTE_DEFINATION.ADD_PRODUCT,
      title: ROUTE_DEFINATION.ADD_PRODUCT,
      element: <AddProduct />,
    },
  ],
};

const roleBasedRoutes = (role) => {
  const PrivateRoutes = {
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
  switch (role) {
    case "CUSTOMER":
      PrivateRoutes.children.push(ProfileRoutes, CategoriesRoutes);
      break;
    case "ADMIN":
      PrivateRoutes.children.push(AddProductRoutes);
      break;
  }
  return PrivateRoutes;
};
export default roleBasedRoutes;
