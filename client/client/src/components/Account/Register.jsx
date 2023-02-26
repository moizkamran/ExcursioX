import LogoImage from "../../assets/AMToursLogo.svg";
import { IconAt, IconAlertCircle, IconCheck, IconX } from "@tabler/icons";
import { useState } from "react";
import InputMask from 'react-input-mask';
import { useSignup } from "../../hooks/useSignup";



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
  Popover,
  Progress,
  Checkbox,
  Group,
  Button,
  Title,
  Text,
  Box,
  MantineProvider,
} from "@mantine/core";



function PasswordRequirement({ meets, label }) {
  return (
  <Text
  color={meets ? "teal" : "red"}
  sx={{ display: "flex", alignItems: "center" }}
  mt={7}
  size="sm"
  >
  {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
  <Box ml={10}>{label}</Box>
  </Text>
  );
  }
  
  const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  {
  re: /[$&+,:;=?@#|'<>.^*()%!-]/,
  label: "Includes special symbol",
  },
  ];
  
  function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;
  
  requirements.forEach((requirement) => {
  if (!requirement.re.test(password)) {
  multiplier += 1;
  }
  });
  
  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }
  

  
const Register = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [companyId, setCompanyId] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [phone, setPhone] = useState('')
const [popoverOpened, setPopoverOpened] = useState(false);
const [value, setValue] = useState('');
const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

const strength = getStrength(value);
const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

const {signup, error, isLoading} = useSignup()


const handleSubmit = async (e) => {
  e.preventDefault()

  await signup(email, password, companyId, firstName, lastName, phone)
}
  

  
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
            <form className="input-area" onSubmit={handleSubmit}>
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
            onChange={(e) => setCompanyId(e.target.value)} 
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
            onChange={(e) => setFirstName(e.target.value)} 
            />
                  </div>
                <div>
              <TextInput
                radius="lg"
            label="Last Name"
                size="md"
            placeholder=""
            className='inputs'
            onChange={(e) => setLastName(e.target.value)} 
            /> </div>
                </div>

              <TextInput 
                label="Number"
                component={InputMask} 
                mask="+\92 (999) 999-9999" 
                
                placeholder="Your phone"
                size="md"
                radius="lg"
                onChange={(e) => setPhone(e.target.value)} 
                />

              <TextInput
          withAsterisk
                size="md"
                radius="lg"
          label="Email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)} 
        />

<div>
      <Popover opened={popoverOpened} position="bottom" width="target" transition="pop" >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              label="Password"
              placeholder="Your password"
              size="md"
              radius="lg"
              value={value}
              onChange={(event) => {
                setValue(event.currentTarget.value);
                setPassword(event.target.value); }}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown style={{borderRadius: 15, border: 0}}>
          <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
          <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </div>

            <Button disabled={isLoading} className='button' type='submit'>Sign In</Button>
            {error && <Text>{error}</Text>}
            </form>
          </Paper>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
