import HouseIcon from "../../../../../assets/propertyArtwork/house.png";
import Image1 from "../../../../../assets/apartment.png";
import React, { useState } from "react";
import TentIcon from "../../../../../assets/propertyArtwork/circus-tent.png";
import hotelIcon from "../../../../../assets/propertyArtwork/hotel.png";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyDetails } from "../../../../../Redux/Slicers/propertySlice";
import { IconRotate2 } from "@tabler/icons";

import {
  Button,
  Card,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";


const PropertySelection = ({ onButtonClick, onPropertySelection }) => {

  const { propertyDetails } = useSelector((state) => state.property);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {/* START OF APARTMENT QS */} <div>
        <UnstyledButton data='Apartment' onClick={onButtonClick}>
          <Card style={{ borderRadius: "35px" }}>
            <Card.Section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 300,
                height: 470,
                backgroundColor: "#07399E",
                mt: "md",
                mb: "md",
                padding: "xl",
              }}
            >
              <Image
                style={{
                  maxWidth: 240,
                  maxHeight: 240,
                  objectFit: 'cover',
                  marginTop: 10
                }}
                src={Image1}
                alt="Random image"
              />
              <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24 }}>Apartment</Text>
              <div
                style={{
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

          </Card> </UnstyledButton>
          <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
            <Button 
            onClick={onButtonClick}
            leftIcon={<IconRotate2 />}
              style={{ borderRadius: 35, backgroundColor: 'green' }}
              name="propertyType"
              value="Apartment"
            >Quick Start</Button>
          </div>
        </div> {/* END OF APARTMENT QS */}
        <div style={{ borderRight: "1px solid black" }} />
        {/* START OF Homes QS */} <div>
        <UnstyledButton value="Hotel">
          <Card style={{ borderRadius: "35px" }}>
            <Card.Section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 300,
                height: 470,
                backgroundColor: "#07399E",
                mt: "md",
                mb: "md",
                padding: "xl",
              }}
            >
              <Image
                style={{
                  maxWidth: 240,
                  maxHeight: 240,
                  objectFit: 'cover',
                  marginTop: 10
                }}
                src={HouseIcon}
                alt="Random image"
              />
              <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24 }}>Homes</Text>
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
                    height: 'max-content',
                    paddingBottom: 10,
                    textAlign: 'center'
                  }}
                >
                  Properties like apartments,
                  vacation homes, <br />
                  villas, etc.
                </Text>
              </div>
            </Card.Section>

          </Card> </UnstyledButton>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>

          </div>
        </div> {/* END OF Homes QS */}

        {/* START OF Hotel QS */} <div>
          <UnstyledButton value="Hotel" onClick={(e) => { setPropertyType("Hotel"); }}>
          <Card style={{ borderRadius: "35px" }}>
            <Card.Section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 300,
                height: 470,
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
              <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24 }}>Hotel, B&Bs & More</Text>
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

          </Card> </UnstyledButton>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>

          </div>
        </div> {/* END OF APARTMENT QS */}

        {/* START OF Alternative QS */} <div>
        <UnstyledButton value="Alt Places" >
          <Card style={{ borderRadius: "35px" }}>
            <Card.Section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 300,
                height: 470,
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
              <Text style={{ color: "white", fontSize: 27, marginBottom: 20, fontFamily: 'Hammersmith One', marginTop: 24 }}>Alternative Places</Text>
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

          </Card> </UnstyledButton>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>

          </div>
        </div> {/* END OF APARTMENT QS */}
      </div>

    </>
  )
}

export default PropertySelection