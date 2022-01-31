import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import { useStyles } from "./style";
import * as yup from 'yup'
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Basic = () => {
  const { root, form, send, title, buttonGroup } = useStyles()
  const { isAuth, toggleAuth, users } = useContext(ThemeContext)
  const navigate = useNavigate()
  async function loadNames() {
    const response = await fetch('/users');
    const names = await response.json();
    console.log(names); 
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
  }
  loadNames();
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required('Must be'),
    password: yup.string().trim().required('Must be'),
  })
  return (
    <div className={root}>
      <Formik
        initialValues={{ name: '', password: '' }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={
          values => {
            const user = users.find(el => el.name === values.name && el.password === values.password)
            if (user) {
              navigate('/')
            }
          }
        }
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
            <Typography variant='h5' className={title}>Please login in</Typography>
            <TextField
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='Please enter name'
              helperText={touched.name && errors.name}
            />
            <TextField
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Please enter password'
              helperText={touched.password && errors.password}
            />
            <div className={buttonGroup}>
              <Button type="submit" disabled={!isValid && !dirty} className={send}>
                Submit
              </Button>
              <Button type="button" variant="outlined" style={{ margineLeft: '5px' }} onClick={() => navigate('/Register')}>
                Sing up
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
};

export default Basic;