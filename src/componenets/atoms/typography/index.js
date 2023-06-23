import { Typography } from "@mui/material";
import React from "react";

const TypographyAtom = ({
  align,
  children,
  classes,
  component,
  variant,
  sx,
}) => {
  return (
    <>
      <Typography
        align={align}
        classes={classes}
        component={component}
        variant={variant}
        sx={sx}
      >
        {children}
      </Typography>
    </>
  );
};

export default TypographyAtom;
