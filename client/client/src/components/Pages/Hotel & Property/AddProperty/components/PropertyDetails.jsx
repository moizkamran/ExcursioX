import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { propertyForm } from "../../../../../Redux/Slicers/propertySlice";

import {
  Input,
  Title,
  Tooltip,
  Text,
  Radio,
  Flex,
  Button,
  ActionIcon,
  Select,
  Avatar,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconSearch,
  IconArrowLeft,
  IconArrowRight,
  IconQuestionCircle,
} from "@tabler/icons";

export const PropertyDetails = ({
  form,
  setForm,
  onButtonClick,
  onBackClick,
}) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });
  const { countries } = countryState;
  const [selectedCountry] = useState();

  const propertyDetails = useSelector(
    (state) => state.property.propertyDetails
  );

  const handleButtonClick = () => {
    console.log(form);
    dispatch(propertyForm(form));
    onButtonClick();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  //find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  const countryOptions = countries.map((country) => ({
    value: country.name.common,
    label: country.name.common,
  }));

  const handleSelectChange = (value) => {
    setForm({ ...form, country: value });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title>Details</Title>
            <div style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                Property Name
              </Text>
              <Input
                name="propertyName"
                onChange={handleInputChange}
                value={form.propertyName}
                radius={"md"}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div>
                      <IconAlertCircle
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                Property Contact Person Name
              </Text>
              <Input
                radius={"md"}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                name="propertyContact"
                onChange={handleInputChange}
                value={form.propertyContact}
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div>
                      <IconAlertCircle
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                Contact Number
              </Text>
              <Input
                radius={"md"}
                name="contactName"
                onChange={handleInputChange}
                value={form.contactName}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div>
                      <IconAlertCircle
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  gap: 10,
                }}
              >
                <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                  Is it company owned?
                </Text>
                <Tooltip label="This is public" position="top-end" withArrow>
                  <div>
                    <IconAlertCircle
                      size="1rem"
                      style={{ display: "block", opacity: 0.5 }}
                    />
                  </div>
                </Tooltip>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  gap: 20,
                  marginTop: 10,
                }}
              >
                <Radio
                  label="Yes"
                  value="yes"
                  name="company"
                  onChange={handleInputChange}
                  checked={form.company === "yes"}
                />
                <Radio
                  label="No"
                  value="no"
                  name="company"
                  checked={form.company === "no"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  gap: 10,
                }}
              >
                <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                  Do you use a channel manager?
                </Text>
                <Tooltip label="This is public" position="top-end" withArrow>
                  <div>
                    <IconAlertCircle
                      size="1rem"
                      style={{ display: "block", opacity: 0.5 }}
                    />
                  </div>
                </Tooltip>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  gap: 20,
                  marginTop: 10,
                }}
              >
                <Radio
                  label="Yes"
                  value="yes"
                  name="channel"
                  onChange={handleInputChange}
                  checked={form.channel === "yes"}
                />
                <Radio
                  label="No"
                  value="no"
                  name="channel"
                  onChange={handleInputChange}
                  checked={form.channel === "no"}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title>Property Address</Title>
            <div style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                Street Address
              </Text>
              <Input
                name="streetAddress"
                onChange={handleInputChange}
                value={form.streetAddress}
                radius={"md"}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div>
                      <IconAlertCircle
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                Address Line 2
              </Text>
              <Input
                name="addressLine2"
                onChange={handleInputChange}
                value={form.addressLine2}
                radius={"md"}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div>
                      <IconAlertCircle
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <div style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                  Country
                </Text>
                <Flex gap={10}>
                  <Select
                    data={countryOptions}
                    value={form.country}
                    searchable
                    name="country"
                    onChange={handleSelectChange}
                  />
                  {searchSelectedCountry && (
                    <Avatar src={searchSelectedCountry.flags.svg} radius="xs" />
                  )}
                </Flex>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              height: 150,
              width: 400,
              borderRadius: 20,
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              border: "2px dashed #07399E",
            }}
          >
            <div>
              <div
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#F0F0F0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    fontFamily: "Fredoka",
                  }}
                >
                  !
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "inherit",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: "24px" }}>We care about you!</Text>
                <Text fz="sm">
                  Please make sure that everything that you are entering is to
                  the best of your knowledge, as this will help avoid any errors
                  in the future.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                height: "auto",
                backgroundColor: "#07399E",
                borderRadius: 35,
                color: "white",
                padding: 45,
              }}
            >
              <Text style={{ fontSize: 25 }}>Step 1 out of 5</Text>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <IconSearch size={100} color={"#00194B"} />
                <Text align="center" style={{ marginTop: 30 }}>
                  Let’s get to know a bit more about this amazing property of
                  yours so that we can understand what we are working with
                </Text>
                <Button
                  style={{
                    backgroundColor: "black",
                    bottom: 0,
                    position: "relative",
                    height: "50px",
                    width: "100%",
                    marginTop: 30,
                  }}
                  leftIcon={<IconQuestionCircle />}
                >
                  Need Help?
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "fixed",
            bottom: 0,
            right: 0,
            marginRight: 20,
            marginBottom: 20,
          }}
        >
          <ActionIcon
            onClick={onBackClick}
            radius="xl"
            variant="filled"
            style={{
              backgroundColor: "black",
              height: "50px",
              width: "50px",
              marginRight: 10,
            }}
          >
            <IconArrowLeft size="1.5rem" />
          </ActionIcon>

          <Button
            onClick={handleButtonClick}
            rightIcon={<IconArrowRight />}
            style={{
              backgroundColor: "#07399E",
              height: "50px",
              width: "200px",
            }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
