import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

function CustomTextField({
  // eslint-disable-next-line react/prop-types
  field, id, name, errors, touched, label, ...props
}) {
  return (
    <TextField
      sx={{ width: '100%' }}
      size="small"
      error={touched[id] && !!errors[id]}
      helperText={touched[id] && !!errors[id] && errors[id]}
      id={id}
      label={label}
      name={name}
      {...field}
      {...props}
    />
  );
}

function SignUp() {
  const initialValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: '',
  };

  const submit = async (values) => {
    const response = await axios.post('http://localhost:5000/signup', {
      ...values,
    });
    console.log(response);
  };

  const validationSchema = {
    firstName: yup.string().required('Please enter firstname'),
    lastName: yup.string().required('Please enter lastname'),
    email: yup.string().required('Please enter email'),
    password: yup.string().required('Please enter password'),
  };

  return (
    <Container component="main">
      <Stack
        alignItems="center"
        marginTop="2rem"
      >
        <Box sx={{ backgroundColor: '#fff', padding: '2rem 2rem 1rem 2rem' }}>
          <Box sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <Typography variant="h4">SignUp</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object(validationSchema)}
            onSubmit={(values) => {
              submit(values);
            }}
          >
            {
                ({ errors, touched }) => (
                  <Form>
                    <Grid container direction="column" rowGap={2}>
                      <Grid container columnGap={2}>
                        <Grid item>
                          <Field id="firstName" name="firstName" label="First name*" errors={errors} touched={touched} component={CustomTextField} />
                        </Grid>
                        <Grid item>
                          <Field id="middleName" name="middleName" label="Middle Name*" errors={errors} touched={touched} component={CustomTextField} />
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Field id="lastName" name="lastName" label="Last Name*" errors={errors} touched={touched} component={CustomTextField} />
                      </Grid>
                      <Grid item>
                        <Field id="email" name="email" label="Email Address" errors={errors} touched={touched} component={CustomTextField} />
                      </Grid>
                      <Grid item>
                        <Field id="password" name="password" label="Password*" type="password" errors={errors} touched={touched} component={CustomTextField} />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          label="I agree to receive emails"
                          control={<Checkbox aria-label="Agree" />}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ width: '100%', textTransform: 'none' }}
                        >
                          SignUp
                        </Button>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Have an account?
                          <NavLink style={{ marginLeft: '0.5rem', textDecoration: 'none' }} to="/signin">SignIn</NavLink>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Form>
                )
            }
          </Formik>
        </Box>
      </Stack>
    </Container>
  );
}

export default SignUp;
