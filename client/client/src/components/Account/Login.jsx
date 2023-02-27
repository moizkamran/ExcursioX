import "../../styles.css";
import LogoImage from "../../assets/AMToursLogo.svg";
import Popup from "../Popovers/forgot-password";

import { IconKey } from "@tabler/icons";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";


//main stylesheet import


import {
  Paper,
  TextInput,
  Anchor,
  PasswordInput,
  Checkbox,
  Group,
  Button,
  Title,
  Text,
  Box,
  MantineProvider,
} from "@mantine/core";


const Login = () => {
  const {login, error, isLoading} = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <img className="logo" src={LogoImage} alt="Logo" />
          <Paper className="form" radius={0} p={30}>
            <Title order={2} className="title" align="left" x mb={100}>
              Welcome Back
              <Text className="subTitle">Please enter your credentials</Text>
            </Title>
            <form onSubmit={handleSubmit}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
              />

              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
              />

              <Group position="apart" mt="lg">
                <MantineProvider
                  theme={{
                    colors: {
                      "theme-blue": [
                        "#e3eeff",
                        "#b4cdff",
                        "#84acfb",
                        "#548af7",
                        "#2669f4",
                        "#104fdb",
                        "#083eab",
                        "#022c7b",
                        "#001a4c",
                        "#00091e",
                      ],
                    },
                  }}
                >
                  <Checkbox
                    
                    label="Remember me for a day"
                    sx={{ lineHeight: 1 }}
                    color="theme-blue"
                  />
                </MantineProvider>
                <Anchor
                  style={{ textDecoration: "none", color: "#07399E" }}
                  size="sm"
                >
                  Forgot password?
                </Anchor>
              </Group>
              <Button className="button" type="submit" disabled={isLoading}>
                Sign In
              </Button>
              <Button
                className="sso"
                component="a"
                target="_blank"
                leftIcon={<IconKey size={25} className="leftIcon" />}
                
              >
                SSO
              </Button>
            </form>

            <Text align="center" mt="md">
              Don&apos;t have an account yet?
              <a className="links" ml="10px" href="/register">
                Sign up now
              </a>
            </Text>
            
          </Paper>
        </div>
        <div className="imageContainer" />
      </div>
    </>
  );
};

export default Login;
