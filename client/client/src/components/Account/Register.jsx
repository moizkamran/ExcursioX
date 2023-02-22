import LogoImage from "../../assets/AMToursLogo.svg";
import { IconAt, IconAlertCircle } from "@tabler/icons";
import { useState } from "react";
import InputMask from 'react-input-mask';



//register stylesheet import
import '../Account/Register.css'

import {
  Paper,
  Center,
  Image,
  Input,
  createStyles,
  Tooltip,
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
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  
  return (
    <>
      <div className='picture'>
      <div className='container'>
        <div className='formFloatContainer'>
          <img className='logo' src={LogoImage} alt="Logo" />
          <Paper className='form3' radius={0} p={30}>
            <Title order={2} className='title' align="left" x mb={100}>
              Let's get you all set-up!
              <Text className="subTitle">Please fill in the details</Text>
              

              
            </Title>
            <form className="input-area" onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
            withAsterisk
            label="Company ID"
            mask="aaa - 9999" 
            placeholder=""
            component={InputMask} 
            icon={<IconAt size={18} />}
            rightSection={
        <Tooltip label="This will be provided to you by the company you are trying to register to" position="top-end" withArrow>
          <div>
            <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
            size="md"
                radius="lg"
            className='inputs'
            {...form.getInputProps('companyId')}
            />
              <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
                <div>
            <TextInput
            withAsterisk
            label="First Name"
              size="md"
              radius="lg"
            placeholder=""
            className='inputs'
            {...form.getInputProps('firstName')}
            />
                  </div>
                <div>
              <TextInput
                radius="lg"
            label="Last Name"
                size="md"
            placeholder=""
            className='inputs'
            {...form.getInputProps('lastName')}
            /> </div>
                </div>

              <TextInput 
                label="Number"
                component={InputMask} 
                mask="+\92 (999) 999-9999" 
                
                placeholder="Your phone"
                size="md"
                radius="lg"
                {...form.getInputProps('phone')}
                />

              <TextInput
          withAsterisk
                size="md"
                radius="lg"
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              size="md"
              radius="lg"
              {...form.getInputProps('password')}
            />
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
