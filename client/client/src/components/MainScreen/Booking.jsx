import Door from "../../assets/Door.png";
import React from "react";

import {
  Button,
  Input,
  Center,
  Menu,
  UnstyledButton,
  Container,
  Flex,
  Image,
  Box,
  Text,
} from "@mantine/core";
import {
  IconCloudFog,
  IconSearch,
  IconChartBar,
  IconMaximize,
  IconWallet,
} from "@tabler/icons";
const Booking = () => {
  return (
    <Center mt={100}>
      <Container
        size="xl"
        style={{ borderRadius: "20px" }}
        h={"auto"}
        w="auto"
        bg="#C1C1C1"
        p={20}
      >
        <Flex
          h="auto"
          p={10}
          bg="#898989"
          gap={10}
          style={{
            justifyContent: " center",

            borderRadius: "20px",
          }}
          direction={"column"}
        >
          <Flex
            style={{
              marginLeft: "10px",
            }}
            direction={"row"}
          >
            <IconCloudFog size={14} color="green" />
            <IconCloudFog size={14} color="green" />
            <IconCloudFog size={14} color="green" />
            <IconCloudFog size={14} color="green" />
          </Flex>
          <Flex>
            <img
              style={{
                height: "150px",
              }}
              src={Door}
            />
          </Flex>
          <Box
            style={{
              marginLeft: "10px",

              marginBottom: "10px",
              borderRadius: "20px",
            }}
            h="20px"
            w="60px"
            bg="green"
          />
        </Flex>

        <Flex
          style={{
            justifyContent: "space-between",
          }}
        >
          <Flex gap={10}>
            <Text> Floor 1</Text>
            <Text>5 Rooms Available</Text>

            <Box
              bg={"#07399E"}
              h="30px"
              w="70px"
              style={{
                borderRadius: "20px",
              }}
            >
              <IconChartBar
                style={{
                  marginLeft: "25px",
                  marginTop: "4px",
                }}
                size={20}
                color="white"
              />
            </Box>
          </Flex>
          <Flex gap={4}>
            <IconChartBar style={{}} size={20} color="white" />
            <Text>45 Beds</Text>
            <IconChartBar style={{}} size={20} color="white" />
            <Text>12 Rooms</Text>
          </Flex>
        </Flex>
      </Container>
      <Text>
        Configure
        <br />
        SpaceView
      </Text>
      <Flex direction={"column"}>
        <Text>Rawahil Al Huda</Text>

        <Text>Property Name Change</Text>
      </Flex>
    </Center>
  );
};

export default Booking;
