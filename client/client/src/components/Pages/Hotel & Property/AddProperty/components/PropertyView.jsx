import React from "react";
import { useState } from "react";

import {
    Title,
    Flex,
    Text,
    NativeSelect,
    Container,
    Radio,
    TextInput,
    Divider,
    ScrollArea,
    NumberInput,
    Box,
    Center,
    Chip,
} from "@mantine/core";
import {
    IconWorldLatitude,
    IconPlus,
    IconMinus,
    IconUsers,
    IconQuestionMark,
    IconMoon,
    IconLamp,
    IconBath,
} from "@tabler/icons";
const PropertyView = () => {
    return (
        <Center mt={100}>
            <Flex gap={100} direction={"column"}>
                <Flex
                    style={{
                        alignItems: "center",
                        position: "relative",
                    }}
                    gap={190}
                    direction={"column"}
                >
                    <Box
                        style={{
                            zIndex: "20",
                            borderRadius: "20px",
                            backgroundColor: "#07399E",
                        }}
                        h={310}
                        p={24}
                        w={650}
                    >
                        <Flex direction={"column"} gap={10}>
                            <Text fs={20} color="white">
                                Booking Dates
                            </Text>
                            <Flex style={{ alignItems: "center" }} gap={10}>
                                <IconWorldLatitude size={40} className="IconBed" />
                                <Text fs={20} color="white">
                                    Destination
                                </Text>
                            </Flex>
                            <Flex gap={20}>
                                <Box
                                    mt={10}
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#FFFFFF",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    h={40}
                                    w={160}
                                >
                                    <Flex
                                        gap={2}
                                        mt={2}
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <IconWorldLatitude size={30} className="IconBed" />

                                        <Text fs={20} color="black">
                                            Mecca, KSA
                                        </Text>
                                    </Flex>
                                </Box>
                                <Flex
                                    mt={10}
                                    style={{ alignItems: "center", justifyContent: "center" }}
                                    direction={"column"}
                                >
                                    <Flex gap={2}>
                                        <IconUsers
                                            style={{
                                                color: "white",
                                            }}
                                            size={35}
                                            className="IconBed"
                                        />
                                        <Text size={"lg"} color="white">
                                            Adults
                                        </Text>
                                    </Flex>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Flex>
                                            <IconPlus
                                                style={{
                                                    marginTop: "10px",
                                                    marginRight: "10px",
                                                }}
                                                size={25}
                                                className="IconBed"
                                            />
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    color: "white",
                                                    backgroundColor: "black",
                                                    borderRadius: "40px",
                                                    height: "40px",
                                                    width: "40px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={{ fontSize: "20px" }}>1</Text>
                                            </div>

                                            <IconMinus
                                                style={{
                                                    marginTop: "10px",
                                                    marginLeft: "10px",
                                                }}
                                                size={25}
                                                className="IconBed"
                                            />
                                        </Flex>
                                    </div>
                                </Flex>
                                <Flex
                                    mt={10}
                                    style={{ alignItems: "center", justifyContent: "center" }}
                                    direction={"column"}
                                >
                                    <Flex gap={2}>
                                        <IconUsers
                                            style={{
                                                color: "white",
                                            }}
                                            size={35}
                                            className="IconBed"
                                        />
                                        <Text size={"lg"} color="white">
                                            Children
                                        </Text>
                                    </Flex>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Flex>
                                            <IconPlus
                                                style={{
                                                    marginTop: "10px",
                                                    marginRight: "10px",
                                                }}
                                                size={25}
                                                className="IconBed"
                                            />
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    color: "white",
                                                    backgroundColor: "black",
                                                    borderRadius: "40px",
                                                    height: "40px",
                                                    width: "40px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={{ fontSize: "20px" }}>1</Text>
                                            </div>

                                            <IconMinus
                                                style={{
                                                    marginTop: "10px",
                                                    marginLeft: "10px",
                                                }}
                                                size={25}
                                                className="IconBed"
                                            />
                                        </Flex>
                                    </div>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction={"column"} gap={10}>
                            <Text fs={20} color="white">
                                Booking Dates
                            </Text>
                            <Flex style={{ alignItems: "center" }} gap={10}>
                                <IconWorldLatitude size={40} className="IconBed" />
                                <Text fs={20} color="white">
                                    Arrival
                                </Text>

                                <IconWorldLatitude size={40} className="IconBed" />
                                <Text fs={20} color="white">
                                    Departure
                                </Text>

                                <IconWorldLatitude size={40} className="IconBed" />
                                <Text fs={20} color="white">
                                    Rooms
                                </Text>
                            </Flex>
                            <Flex gap={20}>
                                <Box
                                    mt={10}
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#FFFFFF",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    h={40}
                                    w={160}
                                >
                                    <Flex
                                        gap={2}
                                        mt={2}
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <IconWorldLatitude size={30} className="IconBed" />

                                        <Text fs={20} color="black">
                                            Mecca, KSA
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box
                                    mt={10}
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#F5E341",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    h={40}
                                    w={160}
                                >
                                    <Flex
                                        gap={2}
                                        mt={2}
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <IconWorldLatitude size={30} className="IconBed" />

                                        <Text fs={20} color="black">
                                            Mecca, KSA
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box
                                    mt={10}
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#F5E341",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    h={40}
                                    w={160}
                                >
                                    <Flex
                                        gap={2}
                                        mt={6}
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text fs={20} color="black">
                                            One
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        style={{
                            marginTop: "340px",
                            position: "absolute",
                            borderRadius: "10px",
                            backgroundColor: "#D9D9D9",
                        }}
                        h={25}
                        p={24}
                        w={"80%"}
                    >
                        <Flex
                            style={{
                                borderRadius: "20px",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <IconWorldLatitude size={40} className="IconBed" />
                            <Text fs={20} color="black">
                                Or simply search by name, chain, location or citys
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "20px",
                        backgroundColor: "#000000",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    h={310}
                    w={650}
                >
                    <Text size={30} color={"white"}>
                        Advance Filters
                    </Text>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            borderTopLeftRadius: "30px",
                            borderTopRightRadius: "30px",
                            backgroundColor: "#2C2C2C",
                            alignItems: "center",
                            borderRadius: "20px",
                            marginTop: "20px",
                        }}
                        w="100%"
                        h="100%"
                    >
                        <Flex gap={4}>
                            <Chip
                                color="#202020"
                                style={{ color: "#202020" }}
                                variant="outline"
                            >
                                Single chip
                            </Chip>
                            <Chip
                                color="#202020"
                                style={{ color: "#202020" }}
                                variant="outline"
                            >
                                Single chip
                            </Chip>
                            <Chip
                                color="#202020"
                                style={{ color: "#202020" }}
                                variant="outline"
                            >
                                Single chip
                            </Chip>

                        </Flex>
                    </Box>


                </Box>
            </Flex>
        </Center>
    );
};

export default PropertyView;
