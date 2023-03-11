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

const PropertyScreen = () => {
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

export default PropertyScreen;
