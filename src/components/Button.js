import React from "react";
import { default as MuiButton } from "@material-ui/core/Button";

const Button = ({ color, variant, type, children }) => {
  return (
    <MuiButton color={color} variant={variant} type={type}>
      {children}
    </MuiButton>
  );
};

export default Button;
