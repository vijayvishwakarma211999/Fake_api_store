import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";
import PublicRoutes from "./publicRoutes";


// project import


// ==================================|| ROUTING RENDER ||================================== //

export default function Routes({isLoggedIn}) {
//   const user = useSelector((state)=> state?.Profile.data)
//   const  role = user?.role.toUpperCase()
  // console.log(RoleRoutes,"_____________routes userr")
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoutes([PrivateRoutes]);
    } else {
      setCurrentRoutes([PublicRoutes]);
    } 
  }, [isLoggedIn]);

  return useRoutes(currentRoutes);
}
