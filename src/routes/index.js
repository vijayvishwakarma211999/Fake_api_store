import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import roleBasedRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";


// project import


// ==================================|| ROUTING RENDER ||================================== //

export default function Routes({isLoggedIn}) {
  const user = useSelector((state)=> state?.auth?.profile)
  const  roleRoute = user?.role
  console.log(roleRoute,"routes ")
  // console.log(RoleRoutes,"_____________routes userr")
  // const role="ADMIN"
  const role="ADMIN"
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoutes(roleBasedRoutes(role));
    } else {
      setCurrentRoutes(PublicRoutes);
    } 
  }, [role,isLoggedIn]);

  return useRoutes([currentRoutes]);
}
