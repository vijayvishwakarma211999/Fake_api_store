import { Navigate } from "react-router-dom";
import Login from "../auth/login";
import SignUp from "../auth/signup";
import LoginLayout from "../layout/LoginLayout";
import { ROUTE_DEFINATION } from "../utils/constant/routes.constant";

const PublicRoutes ={
    element:<LoginLayout/>,
    children:[
{
    path:ROUTE_DEFINATION.BASE,
   element:<Login/>
},
{
    path:ROUTE_DEFINATION.SIGNUP,
   element:<SignUp/>
},
{
    path:"*",
    element:<Navigate to={ROUTE_DEFINATION.BASE}/>
}     
    ]
}
export default PublicRoutes