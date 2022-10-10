import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
    password: Yup.string()
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Weak password")
    .min(8, "Password must be at least 8 characters long")
    .required("Required"),
});



