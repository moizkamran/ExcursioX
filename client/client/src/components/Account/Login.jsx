import "../../styles.css";
import LogoImage from "../../assets/booking-souq-black.svg";
import AppleIcon from "../../assets/icons/apple.png";
import GoogleIcon from "../../assets/icons/google.png";
import MicrosoftIcon from "../../assets/icons/microsoft.png";
import Popup from "../Popovers/forgot-password";
import { IconArrowBack, IconBrandGoogle, IconKey } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '@mantine/form' 

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";


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
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { loginFailure, loginStart, loginSuccess } from "../../Redux/Slicers/userSlice";
import { notifications } from "@mantine/notifications";


const Login = () => {

  
  const [backgroundImage, setBackgroundImage] = useState("");

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await newRequest.post("/auth/login", { 
        email, password
       },
       );
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response?.data);
      notifications.show({
        title: 'Error',
        message: err.response?.data,
        color: 'red',
      });
      console.log(err.response?.data);
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider).then(result => { 
      dispatch(loginStart());
      newRequest.post("/auth/google", { 
        firstName: result.user.displayName.split(" ")[0],
        lastName: result.user.displayName.split(" ")[1],
        email: result.user.email,
        googleId: result.user.uid,
        img : result.user.photoURL,
      }).then((res) => {
        dispatch(loginSuccess(res.data));
        navigate("/")
      }).catch((error) => { dispatch(loginFailure()); console.log(error) })
    })
  };
  

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <Image className="logo" src={LogoImage} alt="Logo" width={250}/>
          <Paper className="form" radius={0} p={30} pos={'relative'}>
          <LoadingOverlay visible={loading} overlayBlur={2} transitionDuration={200}/>
            <Title order={2} ff={'Kumbh Sans'} align="left" mb={100} fz={40} fw={700}>
              Welcome Back
              <Text ff={'Kumbh Sans'} fz={25} fw={300}>Please enter your credentials</Text>
            </Title>
            <form onSubmit={handleSubmit}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                radius='md'
                size="md"
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
              />

              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                radius='md'
                size="md"
                withAsterisk
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
              />

              <Group position="apart" mt="lg">  
                  <Checkbox
                    
                    label="Remember me for a day"
                    sx={{ lineHeight: 1 }}
                    color="theme-blue"
                  />

                <Anchor
                  style={{ textDecoration: "none", color: "#07399E" }}
                  size="sm"
                >
                  Forgot password?
                </Anchor>
              </Group>
              <Button className="button" type="submit">
                Sign In
              </Button>
              <Flex justify={'center'} gap={10}>

                <Button sx={{backgroundColor: 'black', width: 50, height: 50, borderRadius: 10, padding: 0}}>
                  <Image src={AppleIcon}/>
                </Button>
                <Button onClick={signInWithGoogle} sx={{backgroundColor: 'white', border: '1px solid #07399E', width: 50, height: 50, borderRadius: 10, padding: 0}}>
                  <Image src={GoogleIcon}/>
                </Button>
                <Button sx={{backgroundColor: 'white', border: '1px solid #07399E', width: 50, height: 50, borderRadius: 10, padding: 0}}>
                  <Image src={MicrosoftIcon}/>
                </Button>
              
              </Flex>
            </form>
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

export default Login;
