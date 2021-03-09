import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

const DatePicker = ({ id, label, value, onChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'>
        <KeyboardTimePicker
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          ampm={false}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
          fullWidth
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
