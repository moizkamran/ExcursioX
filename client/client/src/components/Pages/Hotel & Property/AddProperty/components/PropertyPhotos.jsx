import FunctionsComponent from "./Functions/FunctionsComponent";
import React, { useState } from "react";

import {
  Group,
  Input,
  TextInput,
  Title,
  Tooltip,
  Text,
  Radio,
  Flex,
  Button,
  Container,
  ActionIcon,
  NativeSelect,
  Checkbox,
  MultiSelect,
  FileInput,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconArrowBadgeLeft,
  IconArrowBadgeRight,
  IconQuestionCircle,
  IconSearch,
  IconMoon,
  IconArrowLeft,
  IconArrowRight,
  IconBread,
  IconParking,
  IconPlus,
  IconLanguageHiragana,
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
  IconMessage,
  IconBed,
  IconPhotoUp,
  IconUpload,
} from "@tabler/icons";

export const PropertyPhotos = ({ onButtonClick, onBackClick }) => {
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
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const fileTypes = ["image/png", "image/jpeg", "image/gif"];

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 12) {
      setErrorMessage("Maximum 12 images can be uploaded at a time.");
      return;
    }

    const selected = [];
    let errors = "";
    files.forEach((file) => {
      if (fileTypes.indexOf(file.type) === -1) {
        errors += `${file.name} is not a supported format.\n`;
        return;
      }
      if (file.size > 1024 * 1024) {
        errors += `${file.name} is too large, please pick a smaller file.\n`;
        return;
      }
      selected.push(file);
    });

    if (errors !== "") {
      setErrorMessage(errors);
      return;
    }

    setSelectedFiles(selectedFiles.concat(selected));
  };

  const deleteFile = (fileToDelete) => {
    const filteredFiles = selectedFiles.filter((file) => file !== fileToDelete);
    setSelectedFiles(filteredFiles);
  };

  const renderPhotos = (photos) => {
    const numPhotos = photos.length;
    const numRows = Math.ceil(numPhotos / 4);
    const cellWidth = 100 / 4; // Adjust to your preference
    const cellHeight = 100 / numRows; // Adjust to your preference

    const photoStyle = {
      width: `${cellWidth}%`,
      height: `${cellHeight}%`,
      position: "relative",
      boxSizing: "border-box",
      padding: "5px",
    };

    const imgStyle = {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    };

    const deleteButtonStyle = {
      position: "absolute",
      top: "5px",
      right: "5px",
      border: "none",
      backgroundColor: "transparent",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
    };

    return photos.map((photo) => {
      return (
        <div key={photo.name} style={photoStyle}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img src={URL.createObjectURL(photo)} alt={photo.name} style={imgStyle} />
            <button style={deleteButtonStyle} onClick={() => deleteFile(photo)}>
              &times;
            </button>
          </div>
        </div>
      );
    });
  };


  return (
    <>
      <FunctionsComponent />
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
                    <NativeSelect
                      data={["Yes", "No"]}
                      radius="md"
                      size="md"
                      style={{ width: 150 }}
                    />
                    <NativeSelect
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
                      color="dark"
                    />
                    <Checkbox label="Children" size="md" color="dark" />
                    <Checkbox label="Adults" size="md" color="dark" />
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
                    />
                    <Checkbox
                      label="Bar"
                      icon={IconGlass}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Sauna"
                      icon={IconBrightnessHalf}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Garden"
                      icon={IconLeaf}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Terrance"
                      icon={IconFence}
                      size="md"
                      color="dark"
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
                    />
                    <Checkbox
                      label="Family Rooms"
                      icon={IconHorseToy}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Hot tub/Jacuzzi"
                      icon={IconBath}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Air Conditioning"
                      icon={IconAirConditioning}
                      size="md"
                      color="dark"
                    />
                    <Checkbox
                      label="Swimming Pool"
                      icon={IconPool}
                      size="md"
                      color="dark"
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
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 150,
                    width: 400,
                    borderRadius: 20,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 20,
                    border: "2px dashed #07399E",
                  }}
                >
                  <div>
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#F0F0F0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FileInput
                        variant={"unstyled"}
                        icon={<IconUpload size={50} color={"black"} />}
                        style={{ marginLeft: 3 }}
                        accept="image/png,image/jpeg"
                        multiple
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "inherit",
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{ fontSize: "24px" }}>Drag & Drop</Text>
                      <Text fz="sm">.png or .jpeg (max 2 MB / Photo)</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPhotos;
