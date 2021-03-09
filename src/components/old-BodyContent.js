import React from "react";
import {
  Grid,
  FormLabel,
  FormGroup,
  Container,
  styled,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import CheckBox from "./Checkbox";
import TextField from "./TextField";
// import Button from "./Button";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import Typography from "@material-ui/core/Typography";

import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";

const StyledBodyContent = styled(Container)({
  margin: "16px auto",
  padding: "16px",
  background: "#fff",
});

const validationSchema = yup.object({
  // Booking Details
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  agencyName: yup
    .string("Enter your first name")
    .required("First name is required"),
  departureDate: yup.date().nullable(),
  provisioningSentToBaseDate: yup.date().nullable(),
  departureBase: yup
    .string("Enter the departure base")
    .required("Departure base is required"),
  // Flight Information
  arrivalFlightNumber: yup
    .string("Enter the arrival flight number")
    .required("The arrival flight number is required"),
  arrivalTime: yup.date().nullable(),
  departureFlightNumber: yup
    .string("Enter the departure flight number")
    .required("The departure flight number is required"),
  departureTime: yup.date().nullable(),
  passengerQuantity: yup
    .number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1, "The minimum amount of passengers is 1")
    .max(24, "The maximum amount of passengers is 24")
    .required("The passenger amount is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const BodyContent = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      agencyName: "",
      departureDate: null,
      departureBase: "",
      arrivalFlightNumber: "",
      arrivalTime: null,
      departureFlightNumber: "",
      departureTime: null,
      passengerQuantity: 1,
      hasSignedContract: false,
      hasPassport: false,
      hasCrewList: false,
      hasSailingLicense: false,
      hasSailingExperience: false,
      needsTransfer: false,
      hasProvisioningList: false,
      receivedDeposit: false,
      receivedFinalPayment: false,
      passengers: null,
      sentToBaseDate: null,
      baseConfirmationDate: null,
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledBodyContent>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant='p' component='h2'>
          Booking Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id='firstName'
              name='firstName'
              label='First Name'
              type='text'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id='lastName'
              name='lastName'
              label='Last Name'
              type='text'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id='agencyName'
              name='agencyName'
              label='Agency'
              type='text'
              value={formik.values.agencyName}
              onChange={formik.handleChange}
              error={
                formik.touched.agencyName && Boolean(formik.errors.agencyName)
              }
              helperText={formik.touched.agencyName && formik.errors.agencyName}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              id='departureDate'
              label='Departure Date'
              value={formik.values.departureDate}
              onChange={(value) => formik.setFieldValue("departureDate", value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='departureBase'
              name='departureBase'
              label='Departure Base'
              type='text'
              value={formik.values.departureBase}
              onChange={formik.handleChange}
              error={
                formik.touched.departureBase &&
                Boolean(formik.errors.departureBase)
              }
              helperText={
                formik.touched.departureBase && formik.errors.departureBase
              }
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='p' component='h2'>
              Flight Information
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='arrivalFlightNumber'
              name='arrivalFlightNumber'
              label='Arrival Flight Number'
              type='text'
              value={formik.values.arrivalFlightNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.arrivalFlightNumber &&
                Boolean(formik.errors.arrivalFlightNumber)
              }
              helperText={
                formik.touched.arrivalFlightNumber &&
                formik.errors.arrivalFlightNumber
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TimePicker
              id='arrivalTime'
              label='Arrival Time'
              value={formik.values.arrivalTime}
              onChange={(value) => formik.setFieldValue("arrivalTime", value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='departureFlightNumber'
              name='departureFlightNumber'
              label='Departure Flight Number'
              type='text'
              value={formik.values.departureFlightNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.departureFlightNumber &&
                Boolean(formik.errors.departureFlightNumber)
              }
              helperText={
                formik.touched.departureFlightNumber &&
                formik.errors.departureFlightNumber
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TimePicker
              id='departureTime'
              label='Departure Time'
              value={formik.values.departureTime}
              onChange={(value) => formik.setFieldValue("departureTime", value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='p' component='h2'>
              Transfer Information
            </Typography>
          </Grid>
          <Grid item>
            <CheckBox
              name='needsTransfer'
              label='Transfer'
              value={formik.values.needsTransfer}
              handleChange={formik.handleChange}
            />
          </Grid>
          {formik.values.needsTransfer ? (
            <>
              <Grid item>
                <TextField
                  id='passengerQuantity'
                  name='passengerQuantity'
                  label='Passengers'
                  type='number'
                  value={formik.values.passengerQuantity}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.passengerQuantity &&
                    Boolean(formik.errors.passengerQuantity)
                  }
                  helperText={
                    formik.touched.passengerQuantity &&
                    formik.errors.passengerQuantity
                  }
                />
              </Grid>
              <Grid item>
                <CheckBox
                  name='hasBaseConfirmation'
                  label='Base Confirmation'
                  value={formik.values.hasBaseConfirmation}
                  handleChange={formik.handleChange}
                />
              </Grid>
            </>
          ) : null}
          <Grid item xs={12}>
            <Typography variant='p' component='h2'>
              Requirements Checklist
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <CheckBox
                name='hasSignedContract'
                label='Signed Contract'
                value={formik.values.hasSignedContract}
                handleChange={formik.handleChange}
              />
              <CheckBox
                name='hasPassport'
                label='Passport'
                value={formik.values.hasPassport}
                handleChange={formik.handleChange}
              />
              <CheckBox
                name='hasCrewList'
                label='Crew List'
                value={formik.values.hasCrewList}
                handleChange={formik.handleChange}
              />
              <CheckBox
                name='hasSailingLicense'
                label='Sailing License'
                value={formik.values.hasSailingLicense}
                handleChange={formik.handleChange}
              />
              <CheckBox
                name='hasSailingExperience'
                label='Sailing Experience'
                value={formik.values.hasSailingExperience}
                handleChange={formik.handleChange}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <CheckBox
                name='hasProvisioningList'
                label='Provisioning List'
                value={formik.values.hasProvisioningList}
                handleChange={formik.handleChange}
              />
              {formik.values.hasProvisioningList ? (
                <>
                  <DatePicker
                    id='hasBeenSent'
                    label='Sent To Base Date'
                    value={formik.values.sentToBaseDate}
                    onChange={(value) =>
                      formik.setFieldValue("sentToBaseDate", value)
                    }
                    margin='normal'
                  />
                  <DatePicker
                    id='hasBeenSent'
                    label='Base Confirmation Date'
                    value={formik.values.baseConfirmationDate}
                    onChange={(value) =>
                      formik.setFieldValue("baseConfirmationDate", value)
                    }
                    margin='normal'
                  />
                </>
              ) : null}
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            {/* <FormLabel component='legend'>Payments</FormLabel>
              <CheckBox
                name='receivedDeposit'
                label='Deposit'
                value={formik.values.receivedDeposit}
                handleChange={formik.handleChange}
              />
              <CheckBox
                name='receivedFinalPayment'
                label='Final Payment'
                value={formik.values.receivedFinalPayment}
                handleChange={formik.handleChange}
              // /> */}
          </Grid>

          <TextField
            id='email'
            name='email'
            label='E-Mail'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id='password'
            name='password'
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {isSubmitting && <LinearProgress />}
          <Button
            variant='contained'
            color='primary'
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </StyledBodyContent>
  );
};

export default BodyContent;
