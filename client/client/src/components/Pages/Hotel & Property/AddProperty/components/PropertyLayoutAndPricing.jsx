import {
  Title,
  Flex,
  Group,
  Text,
  NativeSelect,
  Container,
  Radio,
  TextInput,
  Divider,
  ScrollArea,
  ActionIcon,
  Button,
} from "@mantine/core";
import React from "react";
import {
  IconBed,
  IconPlus,
  IconMinus,
  IconUsers,
  IconQuestionMark,
  IconMoon,
  IconArrowBadgeRight,
  IconArrowBadgeLeft,
  IconLamp,
  IconBath,
  IconArrowLeft,
  IconArrowRight,
  IconQuestionCircle,
  IconMessage,
} from "@tabler/icons";
import { useState } from "react";

const PropertyLayoutAndPricing = ({ onButtonClick, onBackClick }) => {
    const [bedCount, setBedCount] = useState(1);

    const handleAddBed = () => {
      setBedCount(bedCount + 1);
    };
  
    const handleRemoveBed = () => {
      if (bedCount > 1) {
        setBedCount(bedCount - 1);
      }
    };
    
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div style={{ margin: "0", padding: "0" }}>
          <Flex>
            <div>
              <Title>Details</Title>
              <NativeSelect
                data={["React", "Vue", "Angular", "Svelte"]}
                label="Apartment Type"
                radius="md"
                size="md"
              />
              <Text fontSize="xs">
                This is the name guests will see on the website.
              </Text>
              <div style={{ marginTop: "10px" }}>
                <Text size={"lg"}>Custom Name (Optional)</Text>
                <TextInput
                  mt={10}
                  radius="md"
                  size="md"
                />
              </div>
              <Flex gap={50} direction={"row"}>
                <Flex
                  direction={"column"}
                  mt={20}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Flex gap={10}>
                    <IconBed size={40} className="IconBed" />
                    <Text bold size={"xl"}>
                      Bedrooms
                    </Text>
                  </Flex>
                  <Flex style={{ alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        textAlign: "center",
                      }}
                    >
                      {/* clickable icons  */}
                      <Flex style={{ userSelect: 'none'}}>
                        <IconPlus
                          style={{
                            marginTop: "10px",
                            marginRight: "10px",
                          }}
                          size={25}
                          className="IconBed"
                          onClick={handleAddBed}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "white",
                            backgroundColor: "#07399E",
                            borderRadius: "40px",
                            height: "70px",
                            width: "70px",
                            alignItems: "center",
                          }}
                        >
                        <Text style={{ fontSize: "30px", userSelect: 'none' }}>{bedCount !== null ? bedCount : 1}</Text>

                        </div>

                        <IconMinus
                          style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                          }}
                          size={25}
                          className="IconBed"
                          onClick={handleRemoveBed}
                        />
                      </Flex>

                      {/*  */}
                    </div>
                  </Flex>
                </Flex>
                {/* 2nd */}
                <Flex
                  direction={"column"}
                  mt={20}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Flex gap={10}>
                    <IconLamp size={40} className="IconBed" />
                    <Text bold size={"xl"}>
                      Living Rooms
                    </Text>
                  </Flex>
                  <Flex style={{ alignItems: "center", gap: "10px" }}>
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
                            backgroundColor: "#07399E",
                            borderRadius: "40px",
                            height: "70px",
                            width: "70px",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: "30px" }}>1</Text>
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
              {/* 3rd */}
              <Flex
                direction={"column"}
                mt={20}
                ml={100}
                justifyContent="center"
                alignItems="center"
              >
                <Flex gap={10}>
                  <IconBath size={40} className="IconBed" />
                  <Text bold size={"xl"}>
                    Bathrooms
                  </Text>
                </Flex>
                <Flex style={{ alignItems: "center", gap: "10px" }}>
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
                          backgroundColor: "#07399E",
                          borderRadius: "40px",
                          height: "70px",
                          width: "70px",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: "30px" }}>1</Text>
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
            </div>
            <ScrollArea.Autosize mah={"100vh"} mx="auto" maw={'auto'} >

            <Container ml={10}>
              <div>
            
                {Array.from({ length: bedCount }).map((_, index) => (
                  <Container key={index} ml={10}>
                    <div>
                      <Text fw={500}>Bedroom {index + 1}</Text>
                      <Text>
                        What Kind of beds are available in this room?{" "}
                      </Text>
                      <Flex gap={10}>
                        <NativeSelect
                          style={{ width: "250px" }}
                          data={["React", "Vue", "Angular", "Svelte"]}
                          label="Apartment Type"
                          radius="md"
                          size="md"
                          />
                        <NativeSelect
                          style={{ width: "140px" }}
                          data={["React", "Vue", "Angular", "Svelte"]}
                          label="Apartment Type"
                          radius="md"
                          size="md"
                        />
                      </Flex>
                      <Flex
                        mt={10}
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            backgroundColor: "#07399E",
                            borderRadius: "40px",
                            height: "25px",
                            width: "25px",
                          }}
                          >
                          <IconPlus size={15} className="IconBed" />
                        </div>
                        <Text ml={10} bold size={"md"}>
                          Add Another Bed
                        </Text>
                      </Flex>
                      <Text mt={10}>How many guests can stay in this room?</Text>
                      <Flex gap={50} direction={"row"}>
                        <Flex
                          mt={10}
                          style={{ alignItems: "center", gap: "10px" }}
                          >
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

                              <IconUsers
                                style={{
                                  color: "blue",
                                  marginLeft: "30px",
                                }}
                                size={35}
                                className="IconBed"
                              />
                            </Flex>
                          </div>
                        </Flex>
                      </Flex>
                      <Flex mt={10}>
                        <Text>Does it have an en-suite?</Text>
                        <IconQuestionMark
                          style={{
                            marginRight: "10px",
                          }}
                          size={25}
                          className="IconBed"
                          />
                      </Flex>
                      <Flex gap={20} mt={10}>
                        <Radio size={"md"} value="Yes" label="Yes" />
                        <Radio size={"md"} value="No" label="No" />
                      </Flex>

                      <Divider size={"lg"} my="lg" opacity={'40%'} />
                    </div>
                  </Container>
                ))}
              </div>
            </Container>
                </ScrollArea.Autosize>

            <div style={{width: 350}}>
              <Title>Apartment Setting </Title>
              <div
                style={{
                  height: "100px",
                  padding: "10px",
                  width: "100%",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{alignItems:"center", display: 'flex',justifyContent:"center" }}>
                  <IconMoon color="   white" size={25} className="IconBed" />
                  <Text style={{marginLeft: 10}} color="white">Base Price /Night</Text>
                </div>
                <div style={{display: 'flex', alignContent: 'center', justifyContent:'center'}}>

                <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                  input : {
                    color: "white",
                    fontSize: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }
                }}
                style={{
                  width: "150px",
                  height: "50px",
                  marginTop: "10px  ",
                  backgroundColor: "#07399E",
                  borderRadius: "20px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
                />
                </div>
              </div>
              <Text bold size={"md"} align={'center'} mt={10}>
                This is the lowest price that we
                automatically apply to this room for
                all dates. Before your property goes
                live, you can set seasonal pricing on
                your property dashboard.
              </Text>
            </div>

            {/* Two Containers */}
              

              {/* <Flex>
                <Container
                  bg={"black"}
                  style={{
                    marginTop: "10px",
                    height: "50px",
                    borderRadius: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconArrowBadgeLeft
                    style={{ marginTop: "12px" }}
                    color="white"
                    size={25}
                    className="IconBed"
                  />
                </Container>
                <Container
                  bg={"#07399E"}
                  style={{
                    marginTop: "10px",
                    height: "50px",
                    borderRadius: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Flex mt={10}>
                    <Text color="white">Next Step </Text>
                    <IconArrowBadgeRight
                      color="   white"
                      size={25}
                      className="IconBed"
                    />
                  </Flex>
                </Container>
              </Flex> */}


          </Flex>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20}}>
            
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#07399E',
            width: '240px',
            marginBottom: 10,
            borderRadius: 25,
            padding: 15,
            color: 'white',
          }}>
            <Text>Step 2 out of 5</Text>
            <Button style={{backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 10}} leftIcon={<IconMessage/>}>Need Help?</Button>
          </div>
           


       

          <div style={{flexDirection: 'row', display: 'flex'}}> 
      <ActionIcon onClick={onBackClick} radius="xl" variant="filled" style={{backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10}}>
      <IconArrowLeft size="1.5rem" />
    </ActionIcon>
        <Button onClick={onButtonClick} rightIcon={<IconArrowRight/>} style={{backgroundColor: '#07399E', height: '50px', width: '200px'}}>Next Step</Button>
          </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default PropertyLayoutAndPricing;
