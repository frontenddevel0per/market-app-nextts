import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Copyright from "../copyright/copyright.component";
import { FC } from "react";
import { useSignInApi, useCheckSessionApi } from "./signin.api";
import { useAppSelector } from "../../redux/hooks";
import { tokenValueSelector } from "../helpers";

const theme = createTheme();

const SignIn: FC = () => {
  const { mutate, isError } = useSignInApi();
  const token = useAppSelector(tokenValueSelector);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signinData = new FormData(event.currentTarget);
    const postData = {
      email: signinData.get("email"),
      password: signinData.get("password"),
    };
    mutate(JSON.stringify(postData));
  };

  const { isError: isSessionError } = useCheckSessionApi(token);

  return (
    <ThemeProvider theme={theme}>
      {(isError || isSessionError) && (
        <Alert severity="error">
          <AlertTitle>Ошибка!</AlertTitle>
          <strong>Неверный логин или пароль :(</strong>
        </Alert>
      )}

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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
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
            <Link href="/">
              <Button fullWidth variant="contained" sx={{ mb: 2 }}>
                Continue without autorization
              </Button>
            </Link>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
