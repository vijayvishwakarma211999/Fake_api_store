import { Button } from "@mui/material";
import React from "react";

const ButtonAtoms = ({ type, size, variant, children }) => {
  return (
    <>
      <Button type={type} size={size} variant={variant}>
        {children}
      </Button>
    </>
  );
};

export default ButtonAtoms;
