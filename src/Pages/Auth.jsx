import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";
import * as yup from "yup";
import { useNavigate, Navigate } from "react-router-dom";
import { getUsers } from "../Server/query";

const Auth = () => {
  const { root, form, send, title, buttonGroup } = useStyles();
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    getUsers(setUsers)
  })
  if (localStorage.Token) return <Navigate to='/' />
  const validationSchema = yup.object().shape({
    name: yup.string().required("ERROR: The name is required!"),
    password: yup
      .string()
      .required('ERROR: The password is required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  return (
    <div className={root}>
      <Formik
        initialValues={{ name: "", password: "" }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const userNameIndex = users.findIndex((el) => el.name === values.name);
          if (userNameIndex !== -1) {
            if (users[userNameIndex].password === values.password) {
              localStorage.setItem('Token', `${users[userNameIndex].token}`)
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
