import LoginImage from "../../assets/Image.png";
import LogoImage from "../../assets/Logo.png";
import Popup from "../Popovers/forgot-password";
import { IconKey } from "@tabler/icons";
import { useState } from "react";

import {
  Paper,
  createStyles,
  Title,
  Text,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Anchor,
} from "@mantine/core";

import { useForm } from '@mantine/form';

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
    marginTop: "120px",

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

const Register = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <img className={classes.logo} src={LogoImage} alt="Logo" />
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} align="left" x mb={100}>
              Let's get you all set up!
              <Text c="dimmed">Please fill in the details correclty</Text>
            </Title>
            <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>

        
      </form>
    </Box>
          </Paper>
          
        </div>
        <div className={classes.imageContainer} />
      </div>
    </>
  );
};

export default Register;
