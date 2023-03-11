import {
  Title,
  Flex,
  Group,
  Text,
  NativeSelect,
  Container,
  Radio,
  Divider,
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
} from "@tabler/icons";
import { useState } from "react";

const PropertyLayoutAndPricing = () => {
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
          justifyContent: "flex-start",
          gap: "20px",
          margin: "120px 0 0 40px",
        }}
      >
        <Container style={{ margin: "0", padding: "0" }}>
          <Title>Layout & Pricing</Title>
          <Text>Please fill the details property</Text>
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
                <NativeSelect
                  mt={10}
                  data={["React", "Vue", "Angular", "Svelte"]}
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
                  <Flex>
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
                      <Flex>
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
                        <Text style={{ fontSize: "30px" }}>{bedCount !== null ? bedCount : 1}</Text>

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
                  <Flex>
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
                <Flex>
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
            <Container ml={10}>
              <div>
            
                {Array.from({ length: bedCount }).map((_, index) => (
                  <Container key={index} ml={10}>
                    <div>
                      <Text>Bedroom {index + 1}</Text>
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
                            height: "35px",
                            width: "35px",
                          }}
                        >
                          <IconPlus size={25} className="IconBed" />
                        </div>
                        <Text ml={10} bold size={"md"}>
                          Add Another Bed
                        </Text>
                      </Flex>
                      <Text>How many guests can stay in this room?</Text>
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
                      <Flex>
                        <Text>Does it have an en-suite?</Text>
                        <IconQuestionMark
                          style={{
                            marginRight: "10px",
                          }}
                          size={25}
                          className="IconBed"
                        />
                      </Flex>
                      <Flex gap={20}>
                        <Radio size={"md"} value="Yes" label="Yes" />
                        <Radio size={"md"} value="No" label="No" />
                      </Flex>

                      <Divider size={"lg"} my="lg" />
                    </div>
                  </Container>
                ))}
              </div>
            </Container>

            <Container w={"100%"} ml={10}>
              <Title>Apartment Setting </Title>
              <Container
                bg={"black"}
                style={{
                  height: "100px",
                  borderRadius: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex alignItems="center" justifyContent="center">
                  <IconMoon color="   white" size={25} className="IconBed" />
                  <Text color="  white">Base Price /Night</Text>
                </Flex>
                <Container
                  style={{
                    width: "150px",
                    height: "50px",
                    marginTop: "10px  ",
                    backgroundColor: "#07399E",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                  }}
                >
                  <Text>Pkr</Text>
                </Container>
              </Container>
              <Text bold size={"md"}>
                This is the lowest price that we
                <br />
                automatically apply to this room for
                <br />
                all dates. Before your property goes
                <br />
                live, you can set seasonal pricing on
                <br />
                your property dashboard.
              </Text>
            </Container>

            {/* Two Containers */}
            <Container
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              <Container
                bg={"#07399E"}
                style={{
                  height: "100px",
                  borderRadius: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex ml={45}>
                  <Text color="  white">Step 2 out of 5</Text>
                </Flex>
                <Container
                  style={{
                    width: "150px",
                    height: "50px",

                    backgroundColor: "black ",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Flex>
                    <IconMoon color="   white" size={25} className="IconBed" />
                    <Text>Need Help</Text>
                  </Flex>
                </Container>
              </Container>

              <Flex>
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
              </Flex>
            </Container>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default PropertyLayoutAndPricing;
