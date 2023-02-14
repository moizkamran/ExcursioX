import LoginImage from "./assets/Image.png";
import LogoImage from "./assets/Logo.png";
import { IconBrandApple, IconBrandTwitter } from "@tabler/icons";

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
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    justifyContent: "start",
    alignItems: "center",
  },

  logo: {
    margin: "120px",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  button: {
    backgroundColor: "#07399E",
    width: 387,
    height: 61,
    marginTop: "xl",
    fontSize: "md",
    borderRadius: 12,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  root: {
    backgroundColor: "#000000",
    border: 0,
    height: 42,
    borderRadius: 12,

    paddingLeft: 20,
    paddingRight: 20,
    width: 387,
    height: 61,
    marginTop: "xl",
    fontSize: "md",

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
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formContainer}>
        <img className={classes.logo} src={LogoImage} alt="Logo" />
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} align="left" x mb={50}>
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
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button className={classes.button}>Sign In</Button>
            <Button
              className={classes.root}
              component="a"
              target="_blank"
              leftIcon={
                <IconBrandApple size={18} className={classes.leftIcon} />
              }
            >
              Sign in with Apple
            </Button>

            <Text align="center" mt="md">
              Don&apos;t have an account yet?
              <Anchor ml="10px" href="https://mantine.dev/" target="_blank">
                Sign up now
              </Anchor>
            </Text>
          </Paper>
        </div>
        <div className={classes.imageContainer} />
      </div>
    </>
  );
}
