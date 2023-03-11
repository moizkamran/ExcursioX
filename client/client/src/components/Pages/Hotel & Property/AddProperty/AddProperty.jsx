import React, { useState } from "react";

import {
  Box,
  Card,
  Group,
  Image,
  ScrollArea,
  Stepper,
  Text,
  Title,
} from "@mantine/core";

//  COMPONENTS IMPORTS
import PropertySelection from "./components/PropertySelection";
import PropertyDetails from "./components/PropertyDetails";



// state = {
//   step: 1,
//   propertyType: '',
//   propertyName: '',
//   propertyContactPerson: '',
//   propertyContactNumber: '',
//   isCompanyOwned: false,
//   useChannelManager: false,
//   propertyAddress1: '',
//   propertyAddress2: '',
//   country: '',
//   city: '',
//   customName: '',
//   bedrooms: 1,
//   livingRoom: 0,
//   bathroom: 1,
//   bed1: '',
//   bed1Q: 1,
//   guestsStay: 1,
//   enSuite: true,
//   pernight: 0,
//   parking: true,
//   parkingType: '',
//   parkingSite: '',
//   parkingReservation: true,
//   parkingPerDay: 0,
//   breakfast: true,
//   breakfastType: '',
//   breakfastPrice: 0,
//   language: '',
//   language2: '',
//   wifi: false,
//   bar: false,
//   airCondition: false,
//   pool: false,

// }


const AddProperty = () => {
  const [page, setCurrentPage] = useState(0);
  const handleButtonClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };
  const PageDisplay =  () => {
    if (page === 0) {
      return <PropertySelection onButtonClick={handleButtonClick} />;
    } else if (page === 1) {
      return <PropertyDetails />;
    } else if (page === 2) {
      return <h1>Property Layout</h1>;
    } else if (page === 3) {
      return <h1>Property House Rules</h1>;
    } else if (page === 4) {
      return <h1>Property Photos</h1>;
    } else if (page === 5) {
      return <h1>Property Pricing</h1>;
    } else if (page === 6) {
      return <h1>Property Availability</h1>;
    } else {
      return <h1>Property Info</h1>;
    }
  };
  

  const titles = [ "Property Details", "Property Facilities", "Property Layout", "Property House Rules", "Property Photos", "Property Pricing", "Property Availability" ];

  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
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
          <h1 style={{ margin: 0, fontFamily: 'Hammersmith One', fontWeight: 400}}>{titles[page]}</h1>
          <p style={{ margin: 0,fontFamily: 'Fredoka', fontWeight: 400 }}>
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
    </>
  );
};

export default AddProperty;
