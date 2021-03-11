import * as React from "react";
import { Formik, Form, FastField } from "formik";
import {
  styled,
  Container,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { TextField, CheckboxWithLabel, Select } from "formik-material-ui";
import {
  KeyboardDatePicker,
  KeyboardDateTimePicker,
} from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import validationSchema from "../validations/validationSchema";

const StyledBodyContent = styled(Container)({
  margin: "16px auto",
  padding: "16px",
  background: "#fff",
});

const datePickerFormat = "dd/MM/yyyy";
const dateTimePickerFormat = "dd/MM/yyyy - hh:mm";

const BodyContent = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          // Booking Details
          bookingNumber: "",
          clientName: "",
          agencyName: "",
          departureDate: null,
          departureBase: "",
          // Flight Information
          arrivalFlightNumber: "",
          departureFligthNumber: "",
          arrivalFlightTime: "",
          departureFlightTime: "",
          requiresTransfer: false,
          passengerQuantity: 1,
          hasBaseConfirmation: false,
          // Requirements Checklist
          hasSignedContract: false,
          hasPassport: false,
          hasCrewList: false,
          hasSailingLicense: false,
          hasSailingExperience: false,
          hasNightSailingPermit: false,
          hasProvisioningList: false,
          hasBeenSentToBaseDate: "",
          hasBeenConfirmedByBaseDate: "",
          // Payments
          paymentTypeDeposit: "",
          receivedDepositDate: "",
          paymentTypeFinalPayment: "",
          receivedFinalPaymentDate: "",
          // Other
          additionalInformation: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ values, submitForm, isSubmitting }) => (
          <StyledBodyContent>
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant='h6' component='h6'>
                    Booking Details
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <FastField
                    component={TextField}
                    name='bookingNumber'
                    type='text'
                    label='Booking Number'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <FastField
                    component={TextField}
                    name='clientName'
                    type='text'
                    label='Client Name'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <FastField
                    component={TextField}
                    name='agencyName'
                    type='text'
                    label='Agency Name'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <FastField
                    component={KeyboardDatePicker}
                    name='departureDate'
                    label='Departure Date'
                    format={datePickerFormat}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  {/* <FastField
                    component={TextField}
                    name='departureBase'
                    type='text'
                    label='Departure Base'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSignedContract'
                    Label={{
                      label: "Signed Contract",
                      style: { fontSize: "12px" },
                    }}
                  ></FastField>
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasPassport'
                    Label={{ label: "Passport" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasCrewList'
                    Label={{ label: "Crew List" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSailingLicense'
                    Label={{ label: "Sailing License" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSailingExperience'
                    Label={{ label: "Sailing Experience" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasNightSailingPermit'
                    Label={{ label: "Night Sailing Permit" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasProvisioningList'
                    Label={{ label: "Provisioning List" }}
                  />
                  <FastField
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='requiresTransfer'
                    Label={{ label: "Transfer" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' component='h6'>
                    Flight Information
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <FastField
                    component={TextField}
                    name='arrivalFlightNumber'
                    type='text'
                    label='Arrival Flight Number'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  ></FastField>
                </Grid>
                <Grid item xs={6}>
                  <FastField
                    component={KeyboardDateTimePicker}
                    name='arrivalDateTime'
                    label='Arrival Date & Time'
                    format={dateTimePickerFormat}
                    ampm={false}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <FastField
                    component={TextField}
                    name='departureFlightNumber'
                    type='text'
                    label='Departure Flight Number'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  ></FastField>
                </Grid>
                <Grid item xs={6}>
                  <FastField
                    component={KeyboardDateTimePicker}
                    name='departureDateTime'
                    label='Departure Date & Time'
                    format={dateTimePickerFormat}
                    ampm={false}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' component='h6'>
                    Payments
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor='payment-type-deposit' shrink={true}>
                    Deposit Payment Type
                  </InputLabel>
                  <FastField
                    component={Select}
                    name='paymentTypeDeposit'
                    inputProps={{
                      id: "payment-type-deposit",
                    }}
                    fullWidth
                  >
                    <MenuItem value={"directBankTransfer"}>
                      Direct Bank Transfer
                    </MenuItem>
                    <MenuItem value={"creditCard"}>Credit Card</MenuItem>
                    <MenuItem value={"cash"}>Cash</MenuItem>
                    <MenuItem value={"damageWaiver"}>Damage Waiver</MenuItem>
                  </FastField>
                  <FastField
                    component={KeyboardDatePicker}
                    name='receivedDepositDate'
                    label='Received Deposit Date'
                    ampm={false}
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel
                    htmlFor='payment-type-final-payment'
                    shrink={true}
                  >
                    Deposit Payment Type
                  </InputLabel>
                  <FastField
                    component={Select}
                    name='paymentTypeFinalPayment'
                    inputProps={{
                      id: "payment-type-final-payment",
                    }}
                    fullWidth
                  >
                    <MenuItem value={"directBankTransfer"}>
                      Direct Bank Transfer
                    </MenuItem>
                    <MenuItem value={"creditCard"}>Credit Card</MenuItem>
                    <MenuItem value={"cash"}>Cash</MenuItem>
                    <MenuItem value={"damageWaiver"}>Damage Waiver</MenuItem>
                  </FastField>
                  <FastField
                    component={KeyboardDatePicker}
                    name='receivedFinalPaymentDate'
                    label='Received Final Payment Date'
                    ampm={false}
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                {/* Provisioning */}
                {values.hasProvisioningList ? (
                  <>
                    <Grid item xs={12}>
                      <Typography variant='h6' component='h6'>
                        Provisioning
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FastField
                        component={KeyboardDatePicker}
                        name='hasBeenSentToBaseDate'
                        label='Sent To Base Date'
                        format={datePickerFormat}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FastField
                        component={KeyboardDatePicker}
                        name='hasBeenConfirmedByBaseDate'
                        label='Confirmed By Base Date'
                        format={datePickerFormat}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </>
                ) : null}
                {/* Trasnfer Information */}
                {values.requiresTransfer ? (
                  <>
                    <Grid item xs={12}>
                      <Typography variant='h6' component='h6'>
                        Transfer Information
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <FastField
                        component={TextField}
                        name='passengerQuantity'
                        type='number'
                        label='Passenger Quantity'
                        fullWidth
                      ></FastField>
                    </Grid>
                    <Grid item xs={4}>
                      <FastField
                        component={CheckboxWithLabel}
                        type='checkbox'
                        name='hasBaseConfirmation'
                        Label={{ label: "Base Confirmation" }}
                      ></FastField>
                    </Grid>
                  </>
                ) : null}
                <Grid />
                <Grid item xs={12}>
                  <FastField
                    component={TextField}
                    name='additionalInformation'
                    type='text'
                    label='Additional Information'
                    multiline
                    rows={8}
                    rowsMax={8}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                {/* {isSubmitting && <LinearProgress />}
                <Fab
                  color='primary'
                  aria-label='add'
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  <AddIcon />
                </Fab> */}
              </Grid>
            </Form>
          </StyledBodyContent>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default BodyContent;
