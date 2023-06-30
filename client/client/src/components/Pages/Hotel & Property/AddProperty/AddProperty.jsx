import PropertyDetails from "./components/PropertyDetails";
import PropertyFacilities from "./components/PropertyFacilities";
import PropertyHouseRules from "./components/PropertyHouseRules";
import PropertyLayoutAndPricing from "./components/PropertyLayoutAndPricing";
import PropertyPayments from "./components/PropertyPayments";
import PropertyPhotos from "./components/PropertyPhotos";
import PropertyPreview from "./components/PropertyPreview";
import PropertySelection from "./components/PropertySelection";
import PropertyTypeOf from "./components/PropertyTypeOf";
import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import { IconArrowLeft, IconArrowRight, IconDeviceFloppy, IconMessage } from "@tabler/icons";


import {
  ActionIcon,
  Button,
  Stepper,
  Text,
} from "@mantine/core";
import HotelFloors from "./components/HotelFloors";
import AddRoomForFloor from "./components/AddRoomForFloor";
import { buildProperty } from "../../../../Redux/Slicers/propertySlice";
import axios from "axios";

//  COMPONENTS IMPORTS
const AddProperty = () => {

  // FETCHING PROPERTY TYPE FROM REDUX STORE
  const { propertyDetails: { type } } = useSelector((state) => state.property);
  
  const [page, setCurrentPage] = useState(0);

  const handleButtonClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
    // if (page === 2 && type === "Hotel") {
    //   setCurrentFloorIndex(0); // Set the current floor index to 0 when navigating to the hotel floors page
    // }
  };
  const handleButtonClickBack = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };


  

  // DISPLAYING THE CORRECT PAGE
  const PageDisplay = () => {

    if (page === 0) {
      return <PropertySelection onButtonClick={handleButtonClick}/>;
    } else if (page === 1 && type === "Apartment") {
      return (
        <PropertyDetails onButtonClick={handleButtonClick} onBackClick={handleButtonClickBack} type={type}/>
      );
    } else if (page === 1 && type === "Hotel") {
      return (
        <PropertyTypeOf onButtonClick={handleButtonClick} onBackClick={handleButtonClickBack} type={type} />
      );
    } else if (page === 3 && type === "Hotel") {
      return (
        <HotelFloors onButtonClick={handleButtonClick} onBackClick={handleButtonClickBack} type={type} />
      );
    } else if (page === 2 && type === "Hotel") {
      return <PropertyDetails />;
    } else if (page === 2) {
      return <PropertyLayoutAndPricing />;
    } else if (page === 3 || page === 4 && type === "Hotel" ) {
      return <PropertyFacilities />;
    } else if (page === 4 || page === 5 && type === "Hotel") {
      return <PropertyPhotos />;
    } else if (page === 5 || page === 6 && type === "Hotel") {
      return <PropertyHouseRules />;
    } else if (page === 6 || page === 7 && type === "Hotel")  {
      return <PropertyPayments />;
    } else if (page === 7 || page === 8 && type === "Hotel") {
      return <PropertyPreview />;
    } else {
      return <PropertySelection />;
    }
  };


  const titles = ["Select Property Type", "Property Details", "Property Layout", "Facilities & Services", "Amenities & Photos", "House Rules", "Payments & Agreement", "Preview"];

  const [active, setActive] = useState(1);
  const [helpToolbar, setHelpToolbar] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const userInfo = state.user.currentUser
  const unbakedProperty = state.property


  // create a function which takes in a string of Yes or No and returns a boolean
  
  
  const handleBuildProperty = () => {
    // e.preventDefault();

    // TO CONVERT YES/NO TO BOOLEAN
    function convertYesNoToBoolean(string) {
      if (string === "Yes") {
        return true;
      } else {
        return false;
      }
    }

    //TO EXTRACT NUMBERS FROM A STRING
    function extractNumberFromString(string) {
      const number = string.match(/\d+/g).map(Number)[0];
      return number;
    }

    const propertyData = {
      companyId : userInfo.companyId,
      propertyPhotos: unbakedProperty.propertyPhotos.photos.map(photoUrl => ({ photoUrl })),
      propertyIfHotelConfigurations: {
        ownsMultipleHotels: unbakedProperty.propertyDetails.ownsMultipleHotels,
        starRating: unbakedProperty.propertyDetails.starRating,
        hotelChain: unbakedProperty.propertyDetails.hotelChain,
        hotelChainWebsite: unbakedProperty.propertyDetails.hotelChainWebsite,
      },
      propertyHouseRules: {
        cancellationPolicy: unbakedProperty.propertyHouseRules.cancellationPolicy,
        checktimes: {
          guestArrival: {
            from: unbakedProperty.propertyHouseRules.checktimes.guestsArrival.from,
            to: unbakedProperty.propertyHouseRules.checktimes.guestsArrival.to,
          },
          guestDeparture: {
            from: unbakedProperty.propertyHouseRules.checktimes.guestsDeparture.from,
            to: unbakedProperty.propertyHouseRules.checktimes.guestsDeparture.to,
          },
        },
        isSmokingAllowed: convertYesNoToBoolean(unbakedProperty.propertyHouseRules.isSmokingAllowed),
        isPetsAllowed: convertYesNoToBoolean(unbakedProperty.propertyHouseRules.isPetsAllowed),
        isInfantsAllowed: convertYesNoToBoolean(unbakedProperty.propertyHouseRules.isInfantsAllowed) || false,
        minNightStay: extractNumberFromString(unbakedProperty.propertyHouseRules.minNightStay),
      },
      propertyConfigutation: {
        accidentalBookingProtection: unbakedProperty.propertyHouseRules.accidentalBookingsGuard,
        onPropertyCreditCards: unbakedProperty.propertyPayments.paymentMethods,
        bindPayments: unbakedProperty.propertyPayments.bindWallet,
        isAcceptedTerms: unbakedProperty.propertyPayments.acceptedTermsAndConditions,
      },
      propertyType: unbakedProperty.propertyDetails.type,
      isCompanyOwned: convertYesNoToBoolean(unbakedProperty.propertyDetails.isCompanyOwned),
      usesChannelManager: unbakedProperty.propertyDetails.hasChannelManager || false,
      propertyTypeOf: unbakedProperty.propertyDetails.propertyTypeOf,
      propertyName: unbakedProperty.propertyDetails.propertyName,
      propertyAddress: unbakedProperty.propertyDetails.streetAddress,
      propertyCity: unbakedProperty.propertyDetails.city,
      propertyParking: {
        isParkingAvailable: convertYesNoToBoolean(unbakedProperty.propertyFacilites.isParkingAvailable),
        parkingType: unbakedProperty.propertyFacilites.parkingType,
        parkingSpace: unbakedProperty.propertyFacilites.parkingSpace,
        isReservationRequired: convertYesNoToBoolean(unbakedProperty.propertyFacilites.isReservationRequired),
        parkingPrice: unbakedProperty.propertyFacilites.parkingPrice,
      },
      staffLanguages: unbakedProperty.propertyFacilites.language.map(language => ({ language })),
      propertyCountry: unbakedProperty.propertyDetails.country,
      propertyZip: unbakedProperty.propertyDetails.zip,

      propertyFloors: unbakedProperty.propertyDetails.floors.map(floor => ({
        floorRooms: floor.rooms.map(room => ({
          roomNumber: room.roomNumber,
          roomBasePrice: room.basePrice,
          roomName: room.roomName, 
          roomId: room.roomId,
          roomType: room.type,
          roomSize: room.roomSize,
          roomClass: room.roomClass,
          roomView: room.roomView,
          roomMaxGuests: room.maxGuests,
          roomBreakfast: room.breakfast,
          roomFacilities: room.facilities,
          roomBedsClassifications: room.bedClassifications,
          roomBeds: room.beds,
        })),
      })),      
      propertyAddedBy: userInfo._id,
    };

    console.log("Published Property :", propertyData);
    console.log("RAW Porpertday: ", unbakedProperty);
    axios.post("http://localhost:8080/api/property/build", propertyData)
  .then((res) => {
    console.log(res);
    console.log(res.data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

    
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          margin: "20px 0",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontFamily: 'Hammersmith One', fontWeight: 400 }}>{titles[page]}</h1>
          <p style={{ margin: 0, fontFamily: 'Fredoka', fontWeight: 400 }}>
            Please choose the type of property you would like to add
          </p>
        </div>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
          <Stepper.Step label="First step" description="Create an account">
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access">
          </Stepper.Step>
          <Stepper.Completed>
          </Stepper.Completed>
        </Stepper>
      </div>

      <div>
        {PageDisplay()}
      </div>
      {page >= 1 && <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20 }}>
      {page === 8 ? <BuildProperty handleBuildProperty={handleBuildProperty}/> : ''}
        {helpToolbar ? <div style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#07399E',
          width: '240px',
          marginBottom: 10,
          borderRadius: 25,
          padding: 15,
          color: 'white',
        }}>
          <Text>Step {page} out of 5</Text>
          <Button style={{ backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 10 }} leftIcon={<IconMessage />}>Need Help?</Button>
        </div> : ''}
        <NavBar   handleButtonClickBack={handleButtonClickBack} page={page} handleButtonClick={handleButtonClick}  />
      
      </div>}
    </>
  );
};



export default AddProperty;

  function NavBar({handleButtonClickBack, page, handleButtonClick}) {
    return (<div style={{
flexDirection: 'row',
display: 'flex'
}}>
        <ActionIcon onClick={handleButtonClickBack} radius="xl" variant="filled" disabled={page === 0} style={{
  backgroundColor: 'black',
  height: '50px',
  width: '50px',
  marginRight: 10
}}>
          <IconArrowLeft size="1.5rem" />
        </ActionIcon>
        <Button onClick={handleButtonClick} rightIcon={<IconArrowRight />} disabled={page > 7} style={{
  backgroundColor: '#07399E',
  height: '50px',
  width: '200px'
}}>Next Step</Button>
      </div>);
  }
  

function BuildProperty( {handleBuildProperty}) {
  return (<>
    <div style={{ flexDirection: 'row', display: 'flex', marginBottom: 10}}>
        <Button onClick={handleBuildProperty} leftIcon={<IconDeviceFloppy />} style={{
            backgroundColor: '#F7B32B',
            height: '50px',
            width: '260px',
            fontFamily: 'Kumbh Sans',
            fontWeight: 700,
            color: '#2D1E2F'
          }}>Build Property</Button>
      </div>
  
  </>);
}