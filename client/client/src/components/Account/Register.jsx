import { Box, Button, Container, Flex, Image, PasswordInput, Popover, Progress, Select, Text, TextInput, Title, Tooltip, UnstyledButton } from '@mantine/core'
import { useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import './Register.css'

import LogoImage from "../../assets/booking-souq-black.svg";
import { IconAlertCircle, IconCheck, IconLuggage, IconMail, IconPhone, IconUsers, IconX } from '@tabler/icons';

function PasswordRequirement({ meets, label }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}
const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
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

  const [backgroundImage, setBackgroundImage] = useState("");
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const images = [
      "url('https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1440&dpr=1)",
      "url('https://images.pexels.com/photos/2064123/pexels-photo-2064123.jpeg?cs=srgb&dl=pexels-rafael-cosquiere-2064123.jpg&fm=jpg&w=1920&h=1440')",
      "url('https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      "url('https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?cs=srgb&dl=pexels-adrian-lang-2414442.jpg&fm=jpg&w=1920&h=2400')",
      // add more image URLs here
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setBackgroundImage(randomImage);
  }, []);

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';


  return (
    <Container display={'flex'} h={'100vh'} size={'100%'} px={0}>

      <Container style={{ flex: 1 }} size={'100%'} px={0} className='imageContainer'>
        <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}> </div>
      </Container>

      <Container style={{ flex: 1 }} px={0} justify={'center'} align={'center'} pos={'relative'}>
        
        <Image src={LogoImage} width={250} pos={'absolute'} top={15} right={30}/>

        <Flex justify={'center'} align={'center'} h={'100vh'} direction={'column'} gap={20}>
          
          <Flex direction={'column'} align={'flex-start'}>
            <Title ff={'Kumbh Sans'} fw={'bold'}>Let's get you all setup!</Title>
            <Text ff={'Kumbh Sans'} fw={400}>Please enter your details according to your company</Text>
          </Flex>

          <Flex direction={'column'} align={'flex-start'} ta={'left'} gap={5}>

            <TextInput placeholder={'BKS-5200'} w={390} radius={'md'} size="md" label="Company ID" icon={<IconLuggage />} rightSection={
                <Tooltip  
                label="If you dont know what this is, please ask your company to provide you an ID for BKNSQ-CRM" 
                multiline
                radius={'md'}
                width={220}
                color="#07399E"
                withArrow
                transitionProps={{ duration: 200 }}
                position="top-end">
                  <div>
                    <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                  </div>
                </Tooltip>
              }/>

              <Flex w={390} justify={'space-between'} gap={5}>
                  <TextInput radius={'md'} size="md" label="First Name" />
                  <TextInput radius={'md'} size="md" label="Last Name" />
              </Flex>
              
              <TextInput placeholder={'name@company.com'} size="md" w={390} radius={'md'} label="Email" icon={<IconMail />} rightSection={
                <Tooltip  
                label="Please enter your company email address"
                multiline
                width={220}
                radius={'md'}
                color="#07399E"
                withArrow
                transitionProps={{ duration: 200 }}
                position="top-end">
                  <div>
                    <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                  </div>
                </Tooltip>
              }/>

              <Popover opened={popoverOpened} position="bottom" width={350} transitionProps={{ transition: 'pop' }} radius={'md'}>
                  <Popover.Target>
                    <div
                      onFocusCapture={() => setPopoverOpened(true)}
                      onBlurCapture={() => setPopoverOpened(false)}
                    >
                      <PasswordInput
                        w={390}
                        radius={'md'}
                        size="md"
                        label="Password"
                        value={value}
                        onChange={(event) => setValue(event.currentTarget.value)}
                      />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Progress color={color} value={strength} size={5} mb="xs" />
                    <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
                    {checks}
                  </Popover.Dropdown>
              </Popover>
              
              <Text fz={'0.875rem'} fw={500}>Phone Number</Text>
              <PhoneInput
              defaultCountry="sa"
              value={phone}
              hideDropdown
              inputStyle={{ width: 350, borderRadius: 9, borderColor: '#ced4da', fontFamily: 'Fredoka', fontSize: '0.875rem', height: 41.99 }}
              countrySelectorStyleProps={{ 
                buttonStyle:{
                  borderRadius: 9,
                  marginRight: 5,
                  borderColor: '#ced4da',
                  fontSize: '0.875rem',
                  height: 41.99,
                },
              }}
            />


          </Flex>

              <UnstyledButton class="cssbuttons-io">
                <span>Register</span>
              </UnstyledButton>

        </Flex>
      
      </Container>
    
    </Container>

  )
}



export default Register

