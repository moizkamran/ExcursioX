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
} from "@mantine/core";
import React from "react";
import {
  IconBed,
  IconPlus,
  IconMinus,
  IconUsers,
  IconQuestionMark,
  IconMoon,
  IconLamp,
  IconBath,
} from "@tabler/icons";
import { useState } from "react";

const ApartmentType = [ 'Apartment', 'Apartment - Groundfloor',  ];

function addBedType() {
  const newBedTypes = [...bedTypes];
  newBedTypes.push("");
  newBedTypes(newBedTypes);
}

const PropertyLayoutAndPricing = ({ onButtonClick, onBackClick }) => {
    const bedTypes = [ "Twin Beds / 90-130 cm wide", "Queen Beds / 151-180 cm wide", "King Beds / 181-210 cm wide","Full Beds / 131-150 cm wide", "Bunk Beds / Variable size", "Sofa Beds / Variable size", "Crib / Variable size", "Air Mattress / Variable size", "Double Beds / Variable size"  ];
    const [bedroomCount, setBedRoomCount] = useState(1);
    const [beds, setBeds] = useState({ 0: [{ type: bedTypes[0], count: 1 }] });

    const handleAddBedroom = () => {
      if (bedroomCount < 9) {
        setBedRoomCount(bedroomCount + 1);
      }
    };
  
    const handleRemoveBedroom = () => {
      if (bedroomCount > 1) {
        setBedRoomCount(bedroomCount - 1);
      }
    };

    const addBed = () => {
      if (numBeds < 3) {
        setNumBeds(numBeds + 1);
      }
    };

    const removeBed = () => {
      if (numBeds > 1) {
        setNumBeds(numBeds - 1);
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
                data={ApartmentType}
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
                          onClick={handleAddBedroom}
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
                        <Text style={{ fontSize: "30px", userSelect: 'none' }}>{bedroomCount !== null ? bedroomCount : 1}</Text>

                        </div>

                        <IconMinus
                          style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                          }}
                          size={25}
                          className="IconBed"
                          onClick={handleRemoveBedroom}
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

            <Container ml={10} key={bedroomCount}>
              <div>
            
                {Array.from({ length: bedroomCount }).map((_, index) => (
                  
                  <Container key={index} ml={10}>
                    <div>
                      <Text fw={500}>Bedroom {index + 1}</Text>
                      <Text>
                        What Kind of beds are available in this room?{" "}
                      </Text>
                      {Array.from({ length: numBeds }).map((_, bedIndex) => (
                <Flex key={bedIndex} gap={10} alignItems="center" mt={10}>
                  <NativeSelect
                    style={{ width: "250px" }}
                    data={bedTypes}
                    radius="md"
                    size="md"
                  />
                  <Text>X</Text>
                  <NumberInput max={12} min={1} radius="md" size="md" />
                  {bedIndex === numBeds - 1 && (
                    <Flex >
                    {numBeds > 1 &&
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          backgroundColor: "red",
                          borderRadius: "40px",
                          height: "25px",
                          width: "25px",
                        }}
                        onClick={removeBed}
                      >
                         <IconMinus size={15} className="IconBed" cursor={'pointer'} />
                      </div> }
                    </Flex>
                  )}
                </Flex>
              ))}
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
                          <IconPlus size={15} className="IconBed" onClick={addBed} cursor={'pointer'}/>
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

          </Flex>
        </div>
      </div>
    </>
  );
};

export default PropertyLayoutAndPricing;
