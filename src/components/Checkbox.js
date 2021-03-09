import React from "react";
import { FormControlLabel } from "@material-ui/core";
import { default as MuiCheckbox } from "@material-ui/core/Checkbox";

const Checkbox = ({ name, label, value, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox name={name} checked={value} onChange={handleChange} />
      }
      label={label}
    ></FormControlLabel>
  );
};

export default Checkbox;
