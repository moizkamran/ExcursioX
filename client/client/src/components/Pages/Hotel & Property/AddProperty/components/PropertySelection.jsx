import HouseIcon from "../../../../../assets/propertyArtwork/house.png";
import Image1 from "../../../../../assets/apartment.png";
import React, { useState } from "react";
import TentIcon from "../../../../../assets/propertyArtwork/circus-tent.png";
import hotelIcon from "../../../../../assets/propertyArtwork/hotel.png";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyDetails } from "../../../../../Redux/Slicers/propertySlice";
import { IconRotate2 } from "@tabler/icons";
import styles from './propertyCustomStyles.module.css'

import {
  Button,
  Card,
  Text,
  UnstyledButton,
} from "@mantine/core";


const PropertySelection = ({ onButtonClick }) => {
  const dispatch = useDispatch();

  const handlePropertyTypeSelect = ({type}) => {
    dispatch(
      updatePropertyDetails({ type })
    );
    onButtonClick();
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }} >
         <div>

        <UnstyledButton className={styles.card} onClick={() => handlePropertyTypeSelect({ type: 'Apartment' })}>

          <PTCard   Image1={Image1} Title="Apartment" description="Furnished & Self-catering
            where guests can rent
            the entire place" />
          
        </UnstyledButton>

          {/* Quick Start Button */}
          <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
            <Button 
            onClick={onButtonClick}
            leftIcon={<IconRotate2 />}
              style={{ borderRadius: 35, backgroundColor: 'green' }}
              name="propertyType"
              value="Apartment"
            >Quick Start</Button>
          </div>

        </div> 
        <div style={{ borderRight: "1px solid black" }} />

        <div>

          <UnstyledButton className={styles.card}  onClick={() => handlePropertyTypeSelect({ type: 'Hotel' })}>

            <PTCard   Image1={hotelIcon} Title="Hotel" description="Properties like hotels, 
                    B&Bs, guest houses, 
                    hostels, condo hotels, etc." />     

          </UnstyledButton>

        </div> 


        <div>

          <UnstyledButton className={styles.card} onClick={() => handlePropertyTypeSelect({ type: 'House' })}>

            <PTCard   Image1={HouseIcon} Title="Homes" description="Properties like apartments,
              vacation homes, 
              villas, etc." />   

          </UnstyledButton>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>

          </div>
        </div> 

         <div>

        <UnstyledButton className={styles.card} onClick={() => handlePropertyTypeSelect({ type: 'Alternative' })} >
        
         <PTCard   Image1={TentIcon} Title="Alternative Places" description="Properties like boats, campgrounds, luxury tents, etc." />   

        </UnstyledButton>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>

          </div>
        </div> 
      </div>

    </>
  )
}



function PTCard({Image1, Title, description}) {
  return (<Card style={{
borderRadius: "35px"
}}>
        <Card.Section style={{
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
width: 300,
height: 470,
backgroundColor: "#07399E",
mt: "md",
mb: "md",
padding: "xl"
}}>
<div style={{
width: 400,
height: 900,
marginTop: 20,
overflow: 'hidden',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
maxWidth: '100%',
maxHeight: '100%'
}}>
<img style={{
objectFit: 'contain',
maxHeight: '100%',
maxWidth: '100%'
}} src={Image1} alt="Random image" />
</div>
          <Text style={{
  color: "white",
  fontSize: 27,
  marginBottom: 20,
  fontFamily: 'Hammersmith One',
  marginTop: 24
}}>{Title}</Text>
          <div style={{
  width: "100%",
  backgroundColor: "#002265",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 20,
  height: 470,
  maxHeight: 470,
  alignItems: "center",
  borderRadius: '35px',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50
}}>
            <Text style={{
    color: "white",
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: 'Fredoka',
    mt: "md",
    mb: "md",
    width: 250,
    textAlign: 'center'
  }}>
            {description}
            </Text>
          </div>
        </Card.Section>

      </Card>);
}
  
export default PropertySelection