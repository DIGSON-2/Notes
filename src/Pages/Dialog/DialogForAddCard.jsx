import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { addCard } from '../../Server/query';
import { Formik } from "formik";
import * as yup from "yup";
import { useStyles } from './style';

export default function DialogForAddCard(props) {
  const { onClose, open, id } = props;
  const { root, form ,title} = useStyles();
  const handleClose = () => {
    onClose()
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("ERROR: The name is required!").max(15, 'name is very long'),
    phone: yup.number()
    .max(999999999999999, 'ERROR: The number is very long')
    .required('ERROR: The number is required!'),
  });
  return (
    <Dialog open={open} onClose={handleClose} className={root}>
      <Formik
        initialValues={{ name: "", phone: 0 }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => {
          addCard({ name: values.name, number: values.phone, userId: id })
          handleClose()
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
            <DialogTitle className={title}>Add Card</DialogTitle>
            <DialogContent>
              <TextField
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Please enter name"
                helperText={touched.name && errors.name}
              />
              <TextField
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="Please enter phone"
                helperText={touched.phone && errors.phone}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit"
                disabled={!isValid && !dirty}>add</Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}
