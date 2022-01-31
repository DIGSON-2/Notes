import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import * as yup from "yup";
import { ThemeContext } from "../App";
import { useNavigate,Navigate } from "react-router-dom";

const Auth = () => {
  const { root, form, send, title, buttonGroup } = useStyles();
  const { data } = useContext(ThemeContext);
  const navigation = useNavigate();
  if('yes' === localStorage.getItem('Auth')) return <Navigate to='/'/>
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Must be"),
    password: yup.string().trim().required("Must be"),
  });
  return (
    <div className={root}>
      <Button onClick={()=> navigation('/')}>Go first page </Button>
      <Formik
        initialValues={{ name: "", password: "" }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const userNameIndex = data.findIndex((el) => el.name === values.name);
          if (userNameIndex !== -1) {
            if (data[userNameIndex].password === values.password) {
              localStorage.setItem('Auth', 'yes')
              navigation("/");
            }
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
          isValid,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={form}>
            <Typography variant="h5" className={title}>
              Please login in
            </Typography>
            <TextField
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Please enter name"
              helperText={touched.name && errors.name}
            />
            <TextField
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Please enter password"
              helperText={touched.password && errors.password}
            />
            <div className={buttonGroup}>
              <Button
                type="submit"
                disabled={!isValid && !dirty}
                className={send}
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => navigation("/Register")}
              >
                Sing up
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
