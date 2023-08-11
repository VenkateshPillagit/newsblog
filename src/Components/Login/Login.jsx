import {
  Box,
  Button,
  Card, IconButton, InputAdornment, Stack, TextField, Typography,
} from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import Cookies from 'js-cookie';
import * as yup from 'yup';
import { useAuth0 } from '@auth0/auth0-react';
import {
  EmailIcon,
  HidepwdIcon,
  LockIcon,
  ShowpwdIcon,
} from '../../assets/Icons';
import TransitionsModal from '../Modal/Modal';

function CustomTextField({
  // eslint-disable-next-line react/prop-types
  field, id, name, errors, touched, StartIcon, endIcon, showPassword, setShowPassword, ...props
}) {
  return (
    <TextField
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <StartIcon />
          </InputAdornment>
        ),
        endAdornment: endIcon ? (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <HidepwdIcon /> : <ShowpwdIcon />}
            </IconButton>
          </InputAdornment>
        ) : '',
      }}
      error={touched[id] && !!errors[id]}
      helperText={touched[id] && !!errors[id] && errors[id]}
      margin="normal"
      fullWidth
      id={id}
      name={name}
      {...field}
      {...props}
    />
  );
}

// eslint-disable-next-line react/prop-types
function Login() {
  const [accessToken, setAccessToken] = useState('');
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  if (user && isAuthenticated) {
    console.log(user);
  }
  const validationSchema = {
    email: yup.string().required('Please enter email'),
    password: yup.string().required('Please enter password'),
  };

  const login = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/signin', {
        ...values,
      });
      if (response && response.data?.accessToken) {
        setAccessToken(response.data?.accessToken);
        const otpgenerateResponse = await axios.post('http://localhost:5000/otp/generate', {
          ...values,
        }, {
          headers: {
            Autherization: `Bearer ${response.data?.accessToken}`,
          },
        });
        const { isOtpSent } = otpgenerateResponse.data;
        if (isOtpSent) {
          setOpen(true);
        }
      } else {
        setAlert(true);
      }
    } catch (error) {
      setAlert(true);
    }
  };
  return (
    <Stack justifyContent="center" alignItems="center" marginTop="4rem">
      <Card sx={{ display: 'flex', flexDirection: 'column', padding: '2rem 2rem 3rem 2rem' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object(validationSchema)}
          onSubmit={(values) => {
            login(values);
          }}
        >
          {
            ({ errors, touched, values }) => (
              <Form>
                <TransitionsModal
                  accessToken={accessToken}
                  email={values.email}
                  open={open}
                  setOpen={setOpen}
                />
                <Typography component="div" variant="body2">
                  Email Address
                </Typography>
                <Field
                  errors={errors}
                  touched={touched}
                  name="email"
                  id="email"
                  component={CustomTextField}
                  StartIcon={EmailIcon}
                  placeholder="Email Address"
                  autoComplete="email"
                />
                <Typography component="div" variant="body2">
                  Password
                </Typography>
                <Field
                  errors={errors}
                  touched={touched}
                  name="password"
                  id="password"
                  component={CustomTextField}
                  StartIcon={LockIcon}
                  endIcon
                  placeholder="Password"
                  autoComplete="password"
                  type={showPassword ? 'text' : 'password'}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
                <Button
                  type="submit"
                  sx={{
                    width: '100%',
                    height: '3rem',
                    top: '1rem',
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                  variant="contained"
                >
                  SignIn
                  <LoginOutlined sx={{ marginLeft: '1rem' }} />
                </Button>
                {
                  alert
                    ? (
                      <Box sx={{ marginTop: '2rem' }}>
                        <Typography color="red">Incorrect username or password</Typography>
                      </Box>
                    )
                    : ''
                }
                <Box sx={{ marginTop: '2rem' }}>
                  <Typography>
                    Dont have an account?
                    <NavLink style={{ marginLeft: '0.5rem', textDecoration: 'none' }} to="/signup">
                      SignUp
                    </NavLink>
                  </Typography>
                </Box>
              </Form>
            )
          }
        </Formik>
        <Button onClick={() => loginWithRedirect()} variant="contained">Auth0Login</Button>
      </Card>
    </Stack>
  );
}

export default Login;
