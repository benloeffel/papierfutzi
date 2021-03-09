import React from "react";
import { default as MuiTextField } from "@material-ui/core/TextField";

const TextField = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <MuiTextField
      id={id}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
    />
  );
};

export default TextField;
