import { Formik } from "formik";
import * as yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { useNavigate,Navigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import { addUser, getUsersData } from "../Server/query";

const Register = () => {
  const { root, form, send, title , buttonGroup} = useStyles();
  const [users,setUsers] = useState([])
  let [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getUsersData(setUsers)
  },[])
  if(localStorage.Token) return <Navigate to='/'/>
  const validationSchema = yup.object().shape({
    name: yup
    .string()
    .required('ERROR: The name is required!')
    .test('Name', 'This Name has been used' , val => !users.find(el => el.name === val ))  
    ,
    password: yup
    .string()
    .required('ERROR: The password is required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password mismatch")
      .required("ERROR: The confirm password is required!"),
  });
  return (
    <div className={root}>
      <Formik
        initialValues={{
          name: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setUserInfo((prev) => {
            prev.name = values.name;
            prev.password = values.password;
            prev.token = nanoid()
          });
          addUser(userInfo);
          localStorage.setItem('Token', userInfo.token)
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
            <div className={buttonGroup}>
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
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
