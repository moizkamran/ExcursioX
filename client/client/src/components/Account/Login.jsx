import "../../styles.css";
import LogoImage from "../../assets/booking-souq-black.svg";
import Popup from "../Popovers/forgot-password";
import { IconArrowBack, IconKey } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from '@mantine/form' 


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
  Image,
  ActionIcon,
  Flex,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { loginFailure, loginStart, loginSuccess } from "../../Redux/Slicers/userSlice";


const Login = () => {

  const [backgroundImage, setBackgroundImage] = useState("");

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
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
      dispatch(loginFailure());
    }
  };

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <Image className="logo" src={LogoImage} alt="Logo" width={250}/>
          <Paper className="form" radius={0} p={30}>
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
              <Button
                className="sso"
                component="a"
                target="_blank"
                leftIcon={<IconKey size={25} className="leftIcon" />}
                
              >
                SSO
              </Button>
            </form>
            <Text>{error}</Text>
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
