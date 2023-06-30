import "../../styles.css";
import LogoImage from "../../assets/booking-souq-black.svg";
import { IconArrowBack, IconBrandGoogle, IconKey, IconMessage2Code, IconPhone } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '@mantine/form' 

import { auth, provider } from "../../firebase";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";


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
  Image,
  ActionIcon,
  Flex,
  LoadingOverlay,
  PinInput,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { loginFailure, loginStart, loginSuccess } from "../../Redux/Slicers/userSlice";
import { notifications } from "@mantine/notifications";
import { PhoneInput } from "react-international-phone";


const LoginWithPhone = () => {

  
  const [backgroundImage, setBackgroundImage] = useState("");
  const [phone, setPhone] = useState("");

  const loading = useSelector((state) => state.user.loading);
  
  
  useEffect(() => {
    const images = [
      "url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
      "url('https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
      "url('https://images.unsplash.com/photo-1551041777-ed277b8dd348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
      "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      // add more image URLs here
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setBackgroundImage(randomImage);
  }, []);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);


//   window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
//   }, auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); //show SMS code input
    

    const phoneNumber = phone;

   

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      console.log(error);
    });

  };
  

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <Image className="logo" src={LogoImage} alt="Logo" width={250}/>
          <Paper className="form" radius={0} p={30} pos={'relative'}>
          <LoadingOverlay visible={loading} overlayBlur={2} transitionDuration={200}/>
            <Title order={2} ff={'Kumbh Sans'} align="left" mb={100} fz={40} fw={700}>
              Login with phone.
              <Text ff={'Kumbh Sans'} fz={19} fw={300}>Please enter your registered phone number.</Text>
            </Title>
            {
            !isSubmitting
            ? <form onSubmit={handleSubmit}>
                        <Text fz={'0.875rem'} fw={500}>Phone Number</Text>
                          <PhoneInput
                          defaultCountry="sa"
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
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
                            <Button
                                type="submit"
                                color="blue"
                                fullWidth
                                radius={9}
                                mt={20}
                                leftIcon={<IconMessage2Code />}
                                loading={loading}
                                disabled={loading}
                                >
                                Login
                            </Button>
            
                        </form>
            : null
            }
            {
            isSubmitting
            ? <Flex align={'center'} justify={'center'}><PinInput length={6} onChange={(value) => console.log(value)} /> </Flex>: null }

            <Text align="center" mt="md">
              Don&apos;t have an account yet?
              <Text ml="10px" to="/register" component={Link} c={'#07399E'}>
                Sign up now
              </Text>
            </Text>
            <Flex justify={'center'} mt={20}>
              <ActionIcon variant="subtle" component={Link} to={-1}><IconArrowBack /></ActionIcon>
            </Flex>
            
          </Paper>
        </div>
        <div className="imageContainer" style={{ backgroundImage }}/>
      </div>
    </>
  );
};

export default LoginWithPhone;
