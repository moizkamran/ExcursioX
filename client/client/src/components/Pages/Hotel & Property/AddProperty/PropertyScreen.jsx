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
          <h1 style={{ margin: 0 }}>Add New Property Wizard</h1>
          <p style={{ margin: 0 }}>
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

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
  <Card style={{ borderRadius: "20px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - [footer height])",
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          margin: "auto",
        }}
        src={Image1}
        alt="Random image"
      />
      <Text style={{ color: "white" }}>Apartment 1</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomRightRadius: "20px",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 500,
            mt: "md",
            mb: "md",
          }}
        >
          Furnished & Self-catering
          <br />
          Where guests can
          <br />
          rent the entire place{" "}
        </Text>
      </div>
    </Card.Section>
  </Card>
  <div style={{ borderRight: "1px solid black" }} />
  <Card style={{ borderRadius: "20px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - [footer height])",
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          margin: "auto",
        }}
        src={Image1}
        alt="Random image"
      />
      <Text style={{ color: "white" }}>Apartment 2</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomRightRadius: "20px",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 500,
            mt: "md",
            mb: "md",
          }}
        >
          Furnished & Self-catering
          <br />
          Where guests can
          <br />
          rent the entire place{" "}
        </Text>
      </div>
    </Card.Section>
  </Card>
  <div style={{ borderRight: "1px solid black" }} />
  <Card style={{ borderRadius: "20px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - [footer height])",
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          margin: "auto",
        }}
        src={Image1}
        alt="Random image"
      />
      <Text style={{ color: "white" }}>Apartment 2</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomRightRadius: "20px",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 500,
            mt: "md",
            mb: "md",
          }}
        >
          Furnished & Self-catering
          <br />
          Where guests can
          <br />
          rent the entire place{" "}
        </Text>
      </div>
    </Card.Section>
  </Card>
  </div>

      {/* <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group> */}
    </>
  );
};

export default PropertyScreen;
