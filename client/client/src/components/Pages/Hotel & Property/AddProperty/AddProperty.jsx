import React, { useState } from "react";

import {
  ActionIcon,
  Box,
  Button,
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
import PropertyLayoutAndPricing from "./components/PropertyLayoutAndPricing";
import PropertyFacilities from "./components/PropertyFacilities";
import PropertyPhotos from "./components/PropertyPhotos";
import PropertyHouseRules from "./components/PropertyHouseRules"
import { IconArrowLeft, IconArrowRight, IconMessage } from "@tabler/icons";
import PropertyPayments from "./components/PropertyPayments";



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
  const handleButtonClickBack = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };
  const PageDisplay =  () => {
    if (page === 0) {
      return <PropertySelection onButtonClick={handleButtonClick} />;
    } else if (page === 1) {
      return <PropertyDetails onButtonClick={handleButtonClick} onBackClick={handleButtonClickBack}/>;
    } else if (page === 2) {
      return <PropertyLayoutAndPricing />;
    } else if (page === 3) {
      return <PropertyFacilities />;
    } else if (page === 4) {
      return <PropertyPhotos />;
    } else if (page === 5) {
      return <PropertyHouseRules />;
    } else if (page === 6) {
      return <PropertyPayments/>;
    } else {
      return <h1>Property Info</h1>;
    }
  };
  

  const titles = [ "Select Property Type", "Property Details", "Property Layout", "Facilities & Services", "Amenities & Photos", "House Rules", "Payments & Agreement", "Preview" ];

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
      { page >= 2 && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20}}>
            
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
            <Text>Step {page} out of 5</Text>
            <Button style={{backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 10}} leftIcon={<IconMessage/>}>Need Help?</Button>
          </div>
          <div style={{flexDirection: 'row', display: 'flex'}}> 
      <ActionIcon onClick={handleButtonClickBack} radius="xl" variant="filled" disabled={page === 0} style={{backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10}}>
      <IconArrowLeft size="1.5rem" />
    </ActionIcon>
        <Button onClick={handleButtonClick} rightIcon={<IconArrowRight/>} disabled={page > 6} style={{backgroundColor: '#07399E', height: '50px', width: '200px'}}>Next Step</Button>
          </div>
      </div>}
    </>
  );
};

export default AddProperty;
