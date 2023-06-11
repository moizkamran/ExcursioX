import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconAlertCircle, IconBook, IconQuestionCircle, IconSearch } from "@tabler/icons";
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
  Select,
} from "@mantine/core";

export const PropertyDetails = () => {
  const dispatch = useDispatch();

  const [cityState, setCityState] = useState({
    loading: false,
    cities: [],
  });
  

  const { propertyDetails } = useSelector((state) => state.property);
  const isCompanyOwned = useSelector((state) => propertyDetails.isCompanyOwned);
  const hasChannelManeger = useSelector(
    (state) => propertyDetails.hasChannelManeger
  );
  const ownsMultipleHotels = useSelector((state) => propertyDetails.ownsMultipleHotels);

  const type = useSelector((state) => state.property.propertyDetails.type);

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  const [cities, setCities] = useState([]);

  


  const { countries } = countryState;

  const selectedCountry = useSelector(state => state.property.propertyDetails.country);

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
    label: country.name.common,
    value: country.cca2,
  }));
  
  const currentCountry = countryOptions.find((country) => country.value === selectedCountry);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentCountry) {
          // Show "Loading Cities..." while fetching
          setCityState({
            ...cityState,
            loading: true,
          });
    
          const response = await axios.get(
            `http://api.geonames.org/searchJSON?country=${currentCountry?.value}&maxRows=1000&username=moizkamran`
          );
          const data = response.data.geonames;
    
          // Extract unique city names
          const uniqueCities = Array.from(new Set(data.map((city) => city.name)));
    
          // Set the fetched cities
          setCities(uniqueCities);
    
          // Reset the loading state
          setCityState({
            ...cityState,
            loading: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    
  
    fetchData();
  }, [selectedCountry]);
  
  
  

  const cityOptions = cityState.loading
  ? [{ label: 'Loading Cities...', value: 'loading', key: 'loading' }]
  : cities.map((city, index) => ({
      label: city,
      value: city,
      key: `city-${index}`,
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
                defaultValue={propertyDetails.contactNumber}
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
            {
            type != "Hotel"
            ? <div style={{ marginTop: 10 }}>
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
            : null
            }
            {
            type === "Hotel"
            ? <div style={{ marginTop: 10 }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignContent: "center",
                              gap: 10,
                            }}
                          >
                            <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                              Do you own/manage multiple hotels?
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
                              name="ownsMultipleHotels"
                              defaultChecked={ownsMultipleHotels === "Yes"}
                              onChange={(event) => {
                                dispatch(
                                  updatePropertyDetails({
                                    ownsMultipleHotels: event.target.value,
                                  })
                                );
                              }}
                            />
                            <Radio
                              label="No"
                              value="No"
                              name="ownsMultipleHotels"
                              defaultChecked={ownsMultipleHotels === "No"}
                              onChange={(event) => {
                                dispatch(
                                  updatePropertyDetails({
                                    ownsMultipleHotels: event.target.value,
                                  })
                                );
                              }}
                            />
                          </div>
                        </div>
            : null
            }
            {
            ownsMultipleHotels === "Yes"
            ? <Flex direction={'column'}>
                        <div style={{ marginTop: 10 }}>
                          <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                            Hotel Chain
                          </Text>
                          <Input
                            defaultValue={propertyDetails.hotelChain}
                            onChange={(v) => {
                              dispatch(
                                updatePropertyDetails({ hotelChain: v.target.value })
                              );
                            }}
                            radius={"md"}
                            size="sm"
                            style={{ width: 300, marginTop: 10 }}
                            rightSection={
                              <Tooltip label="What hotel chain are you managing?" position="top-end" withArrow>
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
                            Hotel Chain Website
                          </Text>
                          <Input
                            type="url"
                            defaultValue={propertyDetails.hotelChainWebsite}
                            onChange={(v) => {
                              dispatch(
                                updatePropertyDetails({ hotelChainWebsite: v.target.value })
                              );
                            }}
                            radius={"md"}
                            size="sm"
                            style={{ width: 300, marginTop: 10 }}
                            rightSection={
                              <Tooltip label="The website of the hotel chain you are managing" position="top-end" withArrow>
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
                        </Flex>
            : null
            }
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
                defaultValue={propertyDetails.streetAddress}
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
                defaultValue={propertyDetails.addressLine2}
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
                <Flex gap={10} w={300}>
                <Flex gap={10} direction={'column'}>
                <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                  Country
                </Text>
                  <Select
                  searchable
                    radius={"md"}
                    onChange={(selection) => {
                      dispatch(
                        updatePropertyDetails({ country: selection })
                      );
                    }}
                    data={countryOptions}
                    value = {selectedCountry}
                    name="country"
                  />
                </Flex>
                <Flex gap={10} direction={'column'}>
                <Text style={{ fontFamily: "Fredoka", fontSize: 15 }}>
                  City
                </Text>
                <Select
                    searchable
                    radius={"md"}
                    value={propertyDetails.city}
                    onChange={(selection) => {
                      dispatch(updatePropertyDetails({ city: selection}));
                    }}
                    data={cityOptions}
                    name="city"
                    key={cityOptions.key} // Add the key prop here
                  />
                </Flex>
                </Flex>
              </div>
            </div>
          </div>
          {/* <div
            style={{
              backgroundColor: "#FFFFFF",
              height: 150,
              width: 300,
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
          </div> */}
          <Flex>{type === "Hotel" ? <RatingModule dispatch={dispatch} propertyDetails={propertyDetails}/> : null}</Flex>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                height: "auto",
                backgroundColor: "#F4F7FF",
                borderRadius: 35,
                color: "white",
                padding: 45,
              }}
            >
              <Text style={{ fontSize: 25, color: 'black' }}>Feeling lost?</Text>

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
                <Text align="center" style={{ marginTop: 30, color: 'black' }}>
                  Don't worry we got you covered, just click on the button below
                  and you read out the documentation.
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
                  leftIcon={<IconBook />}
                >
                  View Documentation
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


function RatingModule({dispatch, propertyDetails}) {
  return (<div style={{
flexDirection: 'column',
height: 90,
width: 300,
paddingTop: 20,
paddingBottom: 20,
display: 'flex',
alignContent: 'center',
alignItems: 'center',
backgroundColor: '#F4F7FF',
borderRadius: 16,
overflow: 'hidden',
marginTop: 20,
position: "relative"
}}>
<Text fz={20}>Star Rating</Text>
<Rating defaultValue={propertyDetails.starRating} color="orange" size="lg" 
onChange={(value) => {
  dispatch(
    updatePropertyDetails({ starRating: value })
  );
}}
/>
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
alignContent: 'center',
alignItems: 'center'
}}>
  <Text c={'white'} fz={15} fw={400} w={'60%'} align={'center'}>Documents Required</Text>
</div>
</div>);
}
  
