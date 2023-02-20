import LogoImage from "../../assets/AMToursLogo.svg";
import Popup from "../Popovers/forgot-password";
import { IconKey } from "@tabler/icons";
import { useState } from "react";


//register stylesheet import
import '../Account/Register.css'

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

const Register = () => {
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
    <div className="picture">
      <div className='container'>
        <div className='formContainer'>
          <img className='logo' src={LogoImage} alt="Logo" />
          <Paper className='form' radius={0} p={30}>
            <Title order={2} className='title' align="left" x mb={100}>
              Let's get you all set-up!
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
            </Group>
            <Button className='button' type='submit'>Sign In</Button>
            </form>
          </Paper>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
