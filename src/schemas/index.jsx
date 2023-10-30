import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const signup = yup.object().shape({
  email : yup.string().email("Enter a valid email").required("Field is required"),
  password : yup.string().min(5).matches(passwordRules, {message: "Enter a Strong password"}).required("Field is required")
})

export const signin = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Field is required"),
  password: yup.string().required("Field is required")
})