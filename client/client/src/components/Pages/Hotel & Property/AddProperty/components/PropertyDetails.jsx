import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconAlertCircle, IconQuestionCircle, IconSearch } from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyDetails } from "../../../../../Redux/Slicers/propertySlice";

import {
  Input,
  Title,
  Tooltip,
  Text,
  Radio,
  Flex,
  Button,
  NativeSelect,
  Rating,
} from "@mantine/core";

export const PropertyDetails = ({ type }) => {
  const dispatch = useDispatch();
  const { propertyDetails } = useSelector((state) => state.property);
  const isCompanyOwned = useSelector((state) => propertyDetails.isCompanyOwned);
  const hasChannelManeger = useSelector(
    (state) => propertyDetails.hasChannelManeger
  );

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  const { countries } = countryState;

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

  const countryOptions = countries.map((country) => ({
    value: country.name.common,
    label: country.name.common,
  }));

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
                defaultValue={propertyDetails.propertyName}
                onChange={(v) => {
                  console.log(v.target.value);
                  dispatch(
                    updatePropertyDetails({ propertyName: v.target.value })
                  );
                }}
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
                defaultValue={propertyDetails.propertyContact}
                onChange={(v) => {
                  console.log(v.target.value);
                  dispatch(
                    updatePropertyDetails({ propertyContact: v.target.value })
                  );
                }}
                radius={"md"}
                size="sm"
                style={{ width: 300, marginTop: 10 }}
                name="propertyContact"
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
                onChange={(v) => {
                  dispatch(
                    updatePropertyDetails({ contactNumber: v.target.value })
                  );
                }}
                radius={"md"}
                name="contactName"
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
            <Flex>{type === "Hotel" ? <RatingModule /> : null}</Flex>

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
                  value="Yes"
                  name="isCompanyOwned"
                  defaultChecked={isCompanyOwned === "Yes"}
                  onChange={(event) => {
                    dispatch(
                      updatePropertyDetails({
                        isCompanyOwned: event.target.value,
                      })
                    );
                  }}
                />
                <Radio
                  label="No"
                  value="No"
                  name="isCompanyOwned"
                  defaultChecked={isCompanyOwned === "No"}
                  onChange={(event) => {
                    dispatch(
                      updatePropertyDetails({
                        isCompanyOwned: event.target.value,
                      })
                    );
                  }}
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
                  {type === "Hotel"
                    ? "Do you own multiple hotels?"
                    : "Do you use a channel manager?"}
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
                  value="Yes"
                  name="hasChannelManeger"
                  defaultChecked={hasChannelManeger === "Yes"}
                  onChange={(event) => {
                    dispatch(
                      updatePropertyDetails({
                        hasChannelManeger: event.target.value,
                      })
                    );
                  }}
                />
                <Radio
                  label="No"
                  value="No"
                  name="hasChannelManeger"
                  defaultChecked={hasChannelManeger === "No"}
                  onChange={(event) => {
                    dispatch(
                      updatePropertyDetails({
                        hasChannelManeger: event.target.value,
                      })
                    );
                  }}
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
                onChange={(v) => {
                  dispatch(
                    updatePropertyDetails({ streetAddress: v.target.value })
                  );
                }}
                name="streetAddress"
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
                onChange={(v) => {
                  dispatch(
                    updatePropertyDetails({ addressLine2: v.target.value })
                  );
                }}
                name="addressLine2"
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
                  <NativeSelect
                    w={200}
                    radius={"md"}
                    onChange={(v) => {
                      dispatch(
                        updatePropertyDetails({ country: v.target.value })
                      );
                    }}
                    data={countryOptions}
                    name="country"
                  />
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
      </div>
    </>
  );
};

export default PropertyDetails;


function RatingModule({}) {
  return (<div style={{
flexDirection: 'column',
height: 100,
width: 400,
paddingTop: 20,
paddingBottom: 20,
display: 'flex',
alignContent: 'center',
alignItems: 'center',
backgroundColor: '#EAEAEA',
borderRadius: 16,
overflow: 'hidden',
marginTop: 20,
position: "relative"
}}>
<Text fz={20}>Star Rating</Text>
<Rating defaultValue={0} color="orange" size="lg" />
<div style={{
marginTop: 10,
position: "absolute",
bottom: 0,
width: '100%',
display: 'flex',
margin: 0,
padding: 3,
backgroundColor: '#07399E',
borderRadius: '12px 12px 17px 17px',
justifyContent: 'center',
display: 'flex',
alignContent: 'center',
alignItems: 'center'
}}>
  <Text c={'white'} fz={15} fw={400} w={'60%'} align={'center'}>You’ll be required to submit official documents later</Text>
</div>
</div>);
}
  
