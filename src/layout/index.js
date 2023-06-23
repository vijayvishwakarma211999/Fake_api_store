import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./MainLayout/Appbar"
import Sidebar from "./MainLayout/Sidebar"

import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box  height="100vh" sx={{ display: "flex",
    overflow: "hidden", }}>
      <CssBaseline />
      {/* <Appar/>
      <Sidebar/>
      <Outlet/> */}
      <Appbar {...{ open, setOpen }} />
      <Sidebar {...{ open, setOpen }} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <DrawerHeader />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
