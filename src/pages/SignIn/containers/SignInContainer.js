import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import SignInLayout from "../components/index";

import { ROUTE_NAMES } from "../../../router/routeNames";
import { SignInSchema } from "../validation";
import { SignInAuth } from "../reducers";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(SignInAuth(values));

      resetForm();
    },
    validationSchema: SignInSchema,
  });

  const [valuePassword] = useState({
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.PRODUCTS);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return <SignInLayout formik={formik} valuePassword={valuePassword} />;
};

export default SignInContainer;
