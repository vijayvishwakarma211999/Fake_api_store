import React from "react";
import { Menu } from "@mui/icons-material";
import {  Box, IconButton, styled, Toolbar, Typography } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';


const Appbar = ({ open, setOpen }) => {
    const drawerWidth = 240;
    const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }));
    const handleDrawerOpen = () => {
        setOpen(!open);
      };
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                // ...(open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default Appbar;

