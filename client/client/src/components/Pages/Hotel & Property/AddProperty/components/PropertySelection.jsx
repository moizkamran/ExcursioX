import Image1 from "../../../../../assets/apartment.png";
import HouseIcon from "../../../../../assets/propertyArtwork/house.png";
import hotelIcon from "../../../../../assets/propertyArtwork/hotel.png";
import TentIcon from "../../../../../assets/propertyArtwork/circus-tent.png";

import React, { useState } from "react";

import {
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
import { IconRotate2 } from "@tabler/icons";

const PropertySelection = ({ onButtonClick }) => {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {/* START OF APARTMENT QS */} <div>
<Card style={{ borderRadius: "35px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          objectFit: 'cover',
          marginTop: 10
        }}
        src={Image1}
        alt="Random image"
      />
      <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24}}>Apartment</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
          borderRadius: '35px',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,

        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: 'Fredoka',
            mt: "md",
            mb: "md",
            width: 250,
            textAlign: 'center'
          }}
        >
          Furnished & Self-catering
          Where guests can
          rent the entire place
        </Text>
      </div>
    </Card.Section>
    
  </Card>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '50px'}}>
  <Button onClick={onButtonClick} leftIcon={<IconRotate2/>} style={{borderRadius: 35, backgroundColor: 'green'}}>Quick Start</Button>



</div>
  </div> {/* END OF APARTMENT QS */}
  <div style={{ borderRight: "1px solid black" }} />
  {/* START OF Homes QS */} <div>
<Card style={{ borderRadius: "35px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          objectFit: 'cover',
          marginTop: 10
        }}
        src={HouseIcon}
        alt="Random image"
      />
      <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24}}>Homes</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
          borderRadius: '35px',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,

        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: 'Fredoka',
            mt: "md",
            mb: "md",
            width: 250,
            textAlign: 'center'
          }}
        >
          Properties like apartments,
 vacation homes, <br/>
villas, etc.
        </Text>
      </div>
    </Card.Section>
    
  </Card>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '50px'}}>

</div>
  </div> {/* END OF Homes QS */}
  
 {/* START OF APARTMENT QS */} <div>
<Card style={{ borderRadius: "35px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          objectFit: 'cover',
          marginTop: 10
        }}
        src={hotelIcon}
        alt="Random image"
      />
      <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24}}>Hotel, B&Bs & More</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
          borderRadius: '35px',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,

        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: 'Fredoka',
            mt: "md",
            mb: "md",
            width: 250,
            textAlign: 'center'
          }}
        >
          Properties like hotels, 
B&Bs, guest houses, 
hostels, condo hotels, etc.
        </Text>
      </div>
    </Card.Section>
    
  </Card>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '50px'}}>

</div>
  </div> {/* END OF APARTMENT QS */}

{/* START OF APARTMENT QS */} <div>
<Card style={{ borderRadius: "35px" }}>
    <Card.Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        backgroundColor: "#07399E",
        mt: "md",
        mb: "md",
        padding: "xl",
      }}
    >
      <Image
        style={{
          maxWidth: 240,
          objectFit: 'cover',
          marginTop: 10
        }}
        src={TentIcon}
        alt="Random image"
      />
      <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24}}>Alternative Places</Text>
      <div
        style={{
          width: "100%",
          backgroundColor: "#002265",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
          borderRadius: '35px',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,

        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: 'Fredoka',
            mt: "md",
            mb: "md",
            width: 250,
            textAlign: 'center'
          }}
        >
          Properties like boats, campgrounds, luxury tents, etc.
        </Text>
      </div>
    </Card.Section>
    
  </Card>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '50px'}}>

</div>
  </div> {/* END OF APARTMENT QS */}
  </div>
  
    </>
  )
}

export default PropertySelection