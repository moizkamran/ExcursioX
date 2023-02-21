import LogoImage from "../../assets/AMToursLogo.svg";
import Popup from "../Popovers/forgot-password";
import { IconKey } from "@tabler/icons";
import { useState } from "react";

//main stylesheet import
import '../../styles.css'

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
  MantineProvider,
} from "@mantine/core";

import { useForm } from '@mantine/form';

const Login = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  
  const togglePopup = () => {
    setButtonPopup(!buttonPopup);
  };
  return (
    <>
      <div className='container'>
        <div className='formContainer'>
          <img className='logo' src={LogoImage} alt="Logo" />
          <Paper className='form' radius={0} p={30}>
            <Title order={2} className='title' align="left" x mb={100}>
              Welcome Back
              <Text className="subTitle">Please enter your credentials</Text>
              
            </Title>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              {...form.getInputProps('password')}
            />
            
            <Group position="apart" mt="lg">
            <MantineProvider theme={{
        colors: {
          'theme-blue':['#e3eeff','#b4cdff','#84acfb','#548af7','#2669f4','#104fdb','#083eab','#022c7b','#001a4c','#00091e'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}>
            <Checkbox {...form.getInputProps('rememberMe', { type: 'checkbox' })} label="Remember me for a day" sx={{ lineHeight: 1 }} color='theme-blue'/>
            </MantineProvider>
              <Anchor
                style={{ textDecoration: "none", color: "#07399E" }}
                onClick={() => setButtonPopup(true)}
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button className='button' type='submit'>Sign In</Button>
            <Button
              className='sso'
              component="a"
              target="_blank"
              leftIcon={<IconKey size={25} className='leftIcon' />}
            >
              SSO
            </Button>
            </form>

            <Text align="center" mt="md">
              Don&apos;t have an account yet?
              <a
                className="links"
                ml="10px"
                href="/register"
              >
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
            <button className="close-btn" onClick={togglePopup}>
              X
            </button>
          </Popup>
        </div>
        <div className='imageContainer' />
      </div>
    </>
  );
};

export default Login;
