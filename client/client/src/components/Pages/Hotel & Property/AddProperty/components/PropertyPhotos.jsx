import PhotosComponent from "./Functions/PhotosComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  setCheckboxValue,
  updatePropertyPhotos,
} from "../../../../../Redux/Slicers/propertySlice";

import {
  Title,
  Text,
  NativeSelect,
  Checkbox,
  MultiSelect,
  Flex,
  TextInput,
  Button,
  Select,
} from "@mantine/core";
import {
  IconApps,
  IconWifi,
  IconGlass,
  IconBrightnessHalf,
  IconLeaf,
  IconFence,
  IconSmokingNo,
  IconBath,
  IconAirConditioning,
  IconHorseToy,
  IconPool,
  IconBed,
  IconPhotoUp,
} from "@tabler/icons";

export const PropertyPhotos = ({ onButtonClick, onBackClick }) => {
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/actions/upload-by-link", {
      link: photoLink,
    });
  }

  const [photoLink, setPhotoLink] = useState("");
  console.log(photoLink);
  const [data, setData] = useState([
    {
      value: "telephone",
      label: "Telephone with local and long-distance calling",
    },
    { value: "iron", label: "Iron and ironing board" },
    { value: "hair-dryer", label: "Hair dryer" },
    { value: "towels-linens", label: "Towels and linens" },
    { value: "toiletries", label: "Toiletries (soap, shampoo, conditioner)" },
    {
      value: "kitchen",
      label:
        "Kitchen with stove, oven, microwave, refrigerator, and dishwasher",
    },
    { value: "coffee-maker", label: "Coffee maker or tea kettle" },
    { value: "cookware", label: "Cookware, dishware, and utensils" },
    { value: "dining-table", label: "Dining table and chairs" },
    {
      value: "living-room-furniture",
      label: "Living room furniture (sofa, chairs, coffee table)",
    },
    { value: "work-desk", label: "Work desk and chair" },
    { value: "in-room-safe", label: "In-room safe" },
    { value: "housekeeping", label: "Daily housekeeping service" },
    { value: "front-desk", label: "24-hour front desk service" },
    { value: "fitness-center", label: "Fitness center or gym" },
    { value: "spa", label: "Spa or massage services" },
    {
      value: "business-center",
      label: "Business center with computers and printers",
    },
    { value: "laundry", label: "Laundry facilities or dry cleaning service" },
    { value: "parking", label: "On-site parking" },
    { value: "shuttle", label: "Shuttle or transportation service" },
    { value: "pet-friendly", label: "Pet-friendly accommodations" },
    {
      value: "accessible-rooms",
      label: "Accessible rooms and facilities for guests with disabilities",
    },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    dispatch(updatePropertyPhotos({ AddExtras: selected }));
  };

  const dispatch = useDispatch();

  const propertyPhotos = useSelector((state) => state.property.propertyPhotos);

  const HandleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    dispatch(
      updatePropertyPhotos({
        age: { [name]: checked },
      })
    );
  };
  const handleExtrasChange = (event) => {
    const { name, checked } = event.target;

    dispatch(
      updatePropertyPhotos({
        Extras: { [name]: checked },
      })
    );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {/* Parking Module START */}
              <div style={{ gap: 8, display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <IconBed size={"50"} />
                  <Title mt={5}>Extra Bed Option</Title>
                </div>
                <div>
                  <Text>Can you provide extra beds?</Text>
                  <div style={{ display: "flex", gap: 10, marginTop: 5 }}>
                    <Select
                      onChange={(selection) => {
                        dispatch(
                          updatePropertyPhotos({ extraBed: selection })
                        );
                      }}
                      data={["Yes", "No"]}
                      radius="md"
                      size="md"
                      style={{ width: 150 }}
                    />
                    <NativeSelect
                      onChange={(e) => {
                        dispatch(
                          updatePropertyPhotos({
                            extraBedCount: e.target.value,
                          })
                        );
                      }}
                      data={["1 Bed", "2 Beds", "3 Beds", "4 Beds"]}
                      radius="md"
                      size="md"
                      style={{ width: 150 }}
                    />
                  </div>
                </div>
                <div>
                  <Text>
                    Check the box(es) if you can accommodate <br /> the
                    following guests in extra beds.
                  </Text>
                  <div
                    style={{
                      gap: 15,
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 20,
                    }}
                  >
                    <Checkbox
                      label="Children up to 2 years old in cribs"
                      size="md"
                      name="childrenAge2"
                      color="dark"
                      checked={propertyPhotos.age.childrenAge2}
                      onChange={HandleCheckboxChange}
                    />
                    <Checkbox
                      name="children"
                      label="Children"
                      size="md"
                      color="dark"
                      checked={propertyPhotos.age.children}
                      onChange={HandleCheckboxChange}
                    />
                    <Checkbox
                      name="adults"
                      label="Adults"
                      size="md"
                      color="dark"
                      checked={propertyPhotos.age.adults}
                      onChange={HandleCheckboxChange}
                    />
                  </div>
                </div>
              </div>{" "}
              {/* Parking Module END */}
              {/* ----------------------------------------------------------------------------- */}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <IconApps size={"50"} />
                  <Title mt={5}>Extras</Title>
                </div>
                <div style={{ display: "flex", gap: 50 }}>
                  <div
                    style={{
                      gap: 15,
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 20,
                    }}
                  >
                    <Checkbox
                      label="Free Wifi"
                      icon={IconWifi}
                      size="md"
                      color="dark"
                      name="freeWifi"
                      checked={propertyPhotos.Extras.freeWifi}
                      onChange={handleExtrasChange}
                    />
                    <Checkbox
                      label="Bar"
                      icon={IconGlass}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.bar}
                      onChange={handleExtrasChange}
                      name="bar"
                    />
                    <Checkbox
                      label="Sauna"
                      icon={IconBrightnessHalf}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.sauna}
                      onChange={handleExtrasChange}
                      name="sauna"
                    />
                    <Checkbox
                      label="Garden"
                      icon={IconLeaf}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.garden}
                      onChange={handleExtrasChange}
                      name="garden"
                    />
                    <Checkbox
                      label="Terrace"
                      icon={IconFence}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.terrance}
                      onChange={handleExtrasChange}
                      name="terrance"
                    />
                  </div>
                  <div
                    style={{
                      gap: 15,
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 20,
                    }}
                  >
                    <Checkbox
                      label="No Smoking Rooms"
                      icon={IconSmokingNo}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.noSmokingRooms}
                      onChange={handleExtrasChange}
                      name="noSmokingRooms"
                    />
                    <Checkbox
                      label="Family Rooms"
                      icon={IconHorseToy}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.familyRooms}
                      onChange={handleExtrasChange}
                      name="familyRooms"
                    />
                    <Checkbox
                      label="Hot tub/Jacuzzi"
                      icon={IconBath}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.hotTub}
                      onChange={handleExtrasChange}
                      name="hotTub"
                    />
                    <Checkbox
                      label="Air Conditioning"
                      icon={IconAirConditioning}
                      size="md"
                      color="dark"
                      checked={propertyPhotos.Extras.airConditioning}
                      onChange={handleExtrasChange}
                      name="airConditioning"
                    />
                    <Checkbox
                      label="Swimming Pool"
                      checked={propertyPhotos.Extras.swimmingPool}
                      onChange={handleExtrasChange}
                      icon={IconPool}
                      size="md"
                      color="dark"
                      name="swimmingPool"
                    />
                  </div>
                </div>

                <MultiSelect
                  styles={{
                    dropdown: { borderRadius: 25 },
                    value: {
                      backgroundColor: "#07399E",
                      color: "white",
                      fontWeight: 400,
                    },
                    defaultValueRemove: { color: "white" },
                    item: { borderRadius: 25 },
                  }}
                  style={{ marginTop: 20, width: 400, height: 300 }}
                  data={data}
                  label="Add Extra Amenities"
                  placeholder="Piano, Coffe Maker, Hair Dryer, etc."
                  searchable
                  size="md"
                  creatable
                  getCreateLabel={(query) => `+ Create ${query}`}
                  onCreate={(query) => {
                    const item = { value: query, label: query };
                    setData((current) => [...current, item]);
                    return item;
                  }}
                  value={selectedOptions}
                  onChange={handleSelectChange}
                  dropdownPosition="bottom"
                  nothingFound="Nothing found"
                  radius="lg"
                />
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <IconPhotoUp size={"50"} />
                  <Title mt={5}>Upload Photos</Title>
                </div>
                <Text>
                  Great photos invite guests to get the full experience of your{" "}
                  <br /> property, so upload some high-resolution photos that{" "}
                  <br /> represent all your property has to offer.{" "}
                </Text>
                {/* BY LINK */}
                <Flex gap={12}>
                  <TextInput
                    value={photoLink}
                    onChange={(ev) => setPhotoLink(ev.target.value)}
                    radius={"xl"}
                  />{" "}
                  <Button onClick={addPhotoByLink}>Add via Link</Button>
                </Flex>
                <PhotosComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPhotos;
