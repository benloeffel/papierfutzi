import * as React from "react";
import { Formik, Form, Field } from "formik";
import {
  styled,
  Container,
  Button,
  LinearProgress,
  Grid,
  Typography,
  FormGroup,
  InputLabel,
  MenuItem,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
          firstName: "",
          lastName: "",
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
                  <Typography variant='h4' component='h4'>
                    Booking Details
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextField}
                    name='firstName'
                    type='text'
                    label='First Name'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextField}
                    name='lastName'
                    type='text'
                    label='Last Name'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextField}
                    name='agencyName'
                    type='text'
                    label='Agency Name'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
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
                  <Field
                    component={TextField}
                    name='departureBase'
                    type='text'
                    label='Departure Base'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSignedContract'
                    Label={{
                      label: "Signed Contract",
                      style: { fontSize: "12px" },
                    }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasPassport'
                    Label={{ label: "Passport" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasCrewList'
                    Label={{ label: "Crew List" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSailingLicense'
                    Label={{ label: "Sailing License" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasSailingExperience'
                    Label={{ label: "Sailing Experience" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasNightSailingPermit'
                    Label={{ label: "Night Sailing Permit" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='hasProvisioningList'
                    Label={{ label: "Provisioning List" }}
                  ></Field>
                  <Field
                    component={CheckboxWithLabel}
                    type='checkbox'
                    name='requiresTransfer'
                    Label={{ label: "Transfer" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h4' component='h4'>
                    Flight Information
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='arrivalFlightNumber'
                    type='text'
                    label='Arrival Flight Number'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  ></Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={KeyboardDateTimePicker}
                    name='arrivalDateTime'
                    label='Arrival Date & Time'
                    format={dateTimePickerFormat}
                    ampm={false}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='departureFlightNumber'
                    type='text'
                    label='Departure Flight Number'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  ></Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={KeyboardDateTimePicker}
                    name='departureDateTime'
                    label='Departure Date & Time'
                    format={dateTimePickerFormat}
                    ampm={false}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h4' component='h4'>
                    Payments
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor='payment-type-deposit' shrink={true}>
                    Deposit Payment Type
                  </InputLabel>
                  <Field
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
                  </Field>
                  <Field
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
                  <Field
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
                  </Field>
                  <Field
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
                      <Typography variant='h4' component='h4'>
                        Provisioning
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={KeyboardDatePicker}
                        name='hasBeenSentToBaseDate'
                        label='Sent To Base Date'
                        format={datePickerFormat}
                        InputLabelProps={{ shrink: true }}
                        fullwidth
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={KeyboardDatePicker}
                        name='hasBeenConfirmedByBaseDate'
                        label='Confirmed By Base Date'
                        format={datePickerFormat}
                        InputLabelProps={{ shrink: true }}
                        fullwidth
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
                      <Typography variant='h4' component='h4'>
                        Transfer Information
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Field
                        component={TextField}
                        name='passengerQuantity'
                        type='number'
                        label='Passenger Quantity'
                        fullwidth
                      ></Field>
                    </Grid>
                    <Grid item xs={4}>
                      <Field
                        component={CheckboxWithLabel}
                        type='checkbox'
                        name='hasBaseConfirmation'
                        Label={{ label: "Base Confirmation" }}
                      ></Field>
                    </Grid>
                  </>
                ) : null}
                <Grid />
                <Grid item xs={12}>
                  <Field
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
