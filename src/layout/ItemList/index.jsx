import { Add, Category, GridView, ThreeP } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_DEFINATION } from "../../utils/constant/routes.constant";

const ItemList = ({open}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const CustmerList = [
    {
      icon: <GridView />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },
    {
      icon: <ThreeP />,
      value: "Profile",
      path: ROUTE_DEFINATION.PROFILE,
    },
    // {
    //   icon: "",
    //   value: "Categories",
    //   path: ROUTE_DEFINATION.CATEGORIES,
    // },
    // {
    //   icon: "",
    //   value: "Add-Product",
    //   path: ROUTE_DEFINATION.ADD_PRODUCT,
    // },
  ];
  const AdminList = [
    {
      icon: <GridView />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },

    {
      icon: <Category />,
      value: "Categories",
      path: ROUTE_DEFINATION.CATEGORIES,
    },
    {
      icon: <Add />,
      value: "Add-Product",
      path: ROUTE_DEFINATION.ADD_PRODUCT,
    },
  ];
  const user = useSelector((state) => state?.auth?.profile);
  // const role = user?.role.toUpperCase();
  // console.log(user,"rolrrrrrr")
  // const menuItem = role === "ADMIN" ? AdminList : CustmerList;
  // const menuListItem = [...menuItem];
  // console.log(menuListItem,"menulistitem----------------")

  return (

    <>
    {/* {menuListItem.map((item,index)=>{
        return(
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton  >
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText>
{item.value}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })} */}
    <h1>hello</h1>
    </>
  )
  
};

export default ItemList;
