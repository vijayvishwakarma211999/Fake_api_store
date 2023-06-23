import { TextField } from "@mui/material";
import React from "react";

const TextFiledAtoms = ({
  classes,
  color,
  error,
  onBlur,
  id,
  label,
  name,
  onChange,
  select,
  size,
  type,
  value,
  variant,
  margin}
) => {
  return (
    <>
      <TextField
        classes={classes}
        color={color}
        error={error}
        onBlur={onBlur}
        id={id}
        label={label}
        name={name}
        onChange={onChange}
        select={select}
        size={size}
        type={type}
        value={value}
        variant={variant}
        margin={margin}
      />
    </>
  );
};

export default TextFiledAtoms;
