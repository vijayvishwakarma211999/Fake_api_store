import { Copyright, LockOutlined } from "@mui/icons-material";
import toast from "react-hot-toast";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginThunk, ProfileThunk } from "../../redux/asyncThunk/authAsync";
import * as Yup from "yup";
import { ROUTE_DEFINATION } from "../../utils/constant/routes.constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("please enter your email"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              if (values.remember === true) {
                localStorage.setItem("email", values.email);
                localStorage.setItem("password", values.password);
              }
              dispatch(authLoginThunk(values))
                .unwrap()
                .then((res) => {
                  dispatch(ProfileThunk())
                    .unwrap()
                    .then((res) => {
                      console.log(res, "profile________----");
                    })
                    .catch((err) => {
                      console.log(err, "errr_____----------------");
                    });
                  toast.success("Your Loggedin Successfully");
                })
                .catch((err) => {
                  toast.error("Your Loggedin Failed");
                });
            }}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  // onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    autoFocus
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={values.remember}
                        name="remember"
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href={ROUTE_DEFINATION.SIGNUP} variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>
  );
};

export default Login;
