import * as yup from "yup";
const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
});

export default validationSchema;
