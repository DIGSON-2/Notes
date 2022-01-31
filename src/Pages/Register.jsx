import { Formik } from "formik";
import * as yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { useStyles } from "./style";
import { useNavigate,Navigate } from "react-router-dom";

const Register = () => {
  const { root, form, send, title } = useStyles();
  const { addUser } = useContext(ThemeContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  if('yes' === localStorage.getItem('Auth')) return <Navigate to='/'/>
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Must be"),
    password: yup.string().trim().required("Must be"),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Password mismatch")
      .required("Must be"),
    email: yup.string().email("Please enter true email").required(),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "email mismatch")
      .required("Must be"),
  });
  return (
    <div className={root}>
      <Formik
        initialValues={{
          name: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: "",
        }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setUserInfo((prev) => {
            prev.name = values.name;
            prev.email = values.email;
            prev.password = values.password;
          });
          addUser(userInfo);
          alert("Your account was register");
          navigate("/");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form className={form} onSubmit={handleSubmit}>
            <Typography variant="h5" className={title}>
              Please register to login
            </Typography>
            <TextField
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Please enter your name"
              helperText={touched.name && errors.name}
            ></TextField>
            <TextField
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Please enter your password"
              helperText={touched.password && errors.password}
            ></TextField>
            <TextField
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Please confirm your password"
              helperText={touched.confirmPassword && errors.confirmPassword}
            ></TextField>
            <TextField
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Please enter your email"
              helperText={touched.email && errors.email}
            ></TextField>
            <TextField
              name="confirmEmail"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmEmail}
              placeholder="Please confirm your email"
              helperText={touched.confirmEmail && errors.confirmEmail}
            ></TextField>
            <Button
              variant="contained"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
              className={send}
            >
              Sign Up
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/Authorization")}
            >
              Sing In
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
