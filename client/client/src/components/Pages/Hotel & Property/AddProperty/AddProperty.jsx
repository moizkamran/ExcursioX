import Image1 from "../../../../assets/apartment.png";
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
import PropertySelection from "./components/PropertySelection";



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

// // Proceed to next step
// nextStep = () => {
//   const { step } = this.state;
//   this.setState({
//     step: step + 1
//   });
// }

// // Back a steps
// prevStep = () => {
//   const { step } = this.state;
//   this.setState({
//     step: step - 1
//   });
// }

// // Handle change
// handleChange = input => e => {
//   this.setState({[input]: e.target.value});
// }

const AddProperty = () => {

  // // destruction of step
  // const { step } = this.state;
  // const { propertyType, propertyName, propertyContactPerson, propertyContactNumber, 
  //   isCompanyOwned, useChannelManager, propertyAddress1, propertyAddress2, country, 
  //   city, customName, bedrooms, livingRoom, bathroom, bed1, bed1Q, guestsStay, enSuite, pernight, 
  //   parking, parkingType, parkingSite, parkingReservation, parkingPerDay, breakfast, breakfastType, 
  //   breakfastPrice, language, language2, wifi, bar, airCondition, pool } = this.state;
  // const values = { propertyType, propertyName, propertyContactPerson, propertyContactNumber, 
  //   isCompanyOwned, useChannelManager, propertyAddress1, propertyAddress2, country, 
  //   city, customName, bedrooms, livingRoom, bathroom, bed1, bed1Q, guestsStay, enSuite, pernight, 
  //   parking, parkingType, parkingSite, parkingReservation, parkingPerDay, breakfast, breakfastType, 
  //   breakfastPrice, language, language2, wifi, bar, airCondition, pool }

  //   switch(step){
  //     case 1:
  //       return (
  //         <PropertyDetails
  //         nextStep={this.nextStep}
  //         handleChange={this.handleChange}
  //         values={values} />
  //       )
  //     case 2:
  //       return (
  //         <h1>Property Facilites</h1>
  //       )
  //     case 3:
  //       return (
  //         <h1>Property Layout</h1>
  //       )
  //     case 4:
  //       return (
  //         <h1>Property House Rules</h1>
  //       )
  //     case 5:
  //       return (
  //         <h1>Property Photos</h1>
  //       )
  //     case 6:
  //       return (
  //         <h1>Property Facilites</h1>
  //       )
  //     case 7:
  //       return (
  //         <h1>Property Facilites</h1>
  //       )

  //   }
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
          <h1 style={{ margin: 0, fontFamily: 'Hammersmith One', fontWeight: 400}}>Add New Property Wizard</h1>
          <p style={{ margin: 0,fontFamily: 'Fredoka', fontWeight: 400 }}>
            Please choose the type of property you would like to add
          </p>
        </div>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step
            label="First step"
            description="Create an account"
          ></Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Verify email"
          ></Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
          ></Stepper.Step>
          <Stepper.Completed></Stepper.Completed>
        </Stepper>
      </div>
      
      <div>
        
            <PropertySelection/>
      </div>
    </>
  );
};

export default AddProperty;
