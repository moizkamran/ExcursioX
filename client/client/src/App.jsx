import LoginImage from "./assets/Image.png";
import LogoImage from "./assets/Logo.png";
import { IconKey } from "@tabler/icons";
import Popup from './components/forgot-password'
import { useState } from "react";
import './styles.css'

import {
  Paper,
  Center,
  Image,
  createStyles,
  TextInput,
  Anchor,
  PasswordInput,
  Checkbox,
  Group,
  Button,
  Title,
  Text,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    

    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    width: "50%",
    backgroundImage: `url(${LoginImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  form: {
    marginTop : "120px",

    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    justifyContent: "start",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#07399E",
    width: 387,
    height: 61,
    fontSize: "md",
    borderRadius: 12,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  sso: {
    backgroundColor: "#000000",
    border: 0,
    borderRadius: 12,
    paddingLeft: 20,
    paddingRight: 20,
    width: 387,
    height: 61,
    marginTop: "xl",
    fontSize: "xl",

    "&:hover": {
      backgroundColor: theme.fn.darken("#000000", 0.05),
    },
  },

  leftIcon: {
    marginRight: 15,
  },
  logo: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 160,
    height: 68,
  },
}));

export default function App() {
  const { classes } = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  const togglePopup = () => {
    setButtonPopup(!buttonPopup)
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formContainer}>
        <img className={classes.logo} src={LogoImage} alt="Logo" />
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} align="left" x mb={100}>
              Welcome Back
              <Text c="dimmed">Please enter your credentials</Text>
            </Title>
            <TextInput
              label="Email address"
              placeholder="hello@yourcompany.com"
              size="md"
            />
            <Text c="dimmed" fz="xs">
              Please enter your company's email address
            </Text>
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me for a day" sx={{ lineHeight: 1 }} />
              <Anchor
                style={{ textDecoration: 'none', color: "#07399E",}}
                onClick={() => setButtonPopup(true)}
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button className={classes.button}>Sign In</Button>
            <Button
              className={classes.sso}
              component="a"
              target="_blank"
              leftIcon={
                <IconKey size={25} className={classes.leftIcon} />
              }
            >
              SSO
            </Button>

            <Text align="center" mt="md">
              Don&apos;t have an account yet?
              <a className="links" ml="10px" href="https://mantine.dev/" target="_blank">
                Sign up now
              </a>
            </Text>
          </Paper>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h1 align="center">Forgot Password?</h1>
              <h3 align="center">Don't worry we will help you recover it.</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Button variant="contained" color="primary">
                  Button 1
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Button 2
                </Button>
              </div>
            </div>
            <button className="close-btn" onClick={togglePopup}>X</button>
              </Popup>
        </div>
        <div className={classes.imageContainer} />
      </div>
    </>
  );
}