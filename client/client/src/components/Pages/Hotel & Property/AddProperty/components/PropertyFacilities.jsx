import { Group, Input, TextInput, Title, Tooltip, Text, Radio, Flex, Button, Container, ActionIcon, NativeSelect, Checkbox, Alert} from '@mantine/core'
import { IconAlertCircle, IconArrowBadgeLeft, IconArrowBadgeRight, IconQuestionCircle, IconSearch, IconMoon, IconArrowLeft, IconArrowRight, IconBread, IconParking, IconPlus, IconLanguageHiragana, IconApps, IconWifi, IconGlass, IconBrightnessHalf, IconLeaf, IconFence, IconSmokingNo, IconBath, IconAirConditioning, IconHorseToy, IconPool, IconMessage, IconMinus, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'

export const PropertyFacilites = () => {

  const [checkboxes, setCheckboxes] = useState({
    freeWifi: false,
    bar: false,
    sauna: false,
    garden: false,
    terrance: false,
    noSmokingRooms: false,
    familyRooms: false,
    hotTub: false,
    airConditioning: false,
    swimmingPool: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const [isParkingAvailable, setIsParkingAvailable] = useState("No");
  const [isBreakfastAvailable, setIsBreakfastAvailable] = useState("No");
  const [numBreakfastFields, setNumBreakfastFields] = useState(1);
  const [breakfastTypes, setBreakfastTypes] = useState([""]);

  const addBreakfastField = () => {
    if (numBreakfastFields >= 3) {
      throw new Error("You cannot add more than 3 breakfast fields.");
    }
  
    setNumBreakfastFields(prev => prev + 1);
    setBreakfastTypes(prev => [...prev, ""]);
  };
  
  const removeBreakfastField = () => {
    if (numBreakfastFields <= 1) {
      throw new Error("You cannot remove the last breakfast field.");
    }
  
    setNumBreakfastFields(prev => prev - 1);
    setBreakfastTypes(prev => prev.slice(0, prev.length - 1));
  };

  const [languages, setLanguages] = useState(["English"]);

  const addLanguageField = () => {
    if (languages.length >= 3) {
      return;
    }
    setLanguages([...languages, ""]);
  };

  const removeLanguageField = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleLanguageChange = (value, index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = value;
    setLanguages(updatedLanguages);
  };
  

  console.log(checkboxes)

  
  return (
    <>
    <div style={{ display: "flex", flexDirection:'row', padding: 20, justifyContent: 'space-between'}}> 
    
    <div style={{ margin: "0", padding: "0", display: 'flex', gap: 20, justifyContent: 'space-between'}}> 
 

        <div> 

        <div style={{ display : 'flex', flexDirection: 'column', gap: 5}}>
            {/* Parking Module START */}
            <div style={{gap: 8, display: 'flex', flexDirection: 'column'}}>

            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconParking size={'50'}/>
                    <Title mt={5}>Parking</Title>
                </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20,  marginTop: 10}}>

            <NativeSelect
                data={["No", "Yes - Free", "Yes - Paid" ]}
                label="Is Parking avaiable to guests?"
                radius="md"
                size="md"
                value={isParkingAvailable}
                onChange={(e) => setIsParkingAvailable(e.target.value)}
                />
            
            {isParkingAvailable !=="No" && ( 
            <>
            <NativeSelect
                data={["Private", "Public"]}
                label="Type of Parking"
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["On-Site", "Off-site"]}
                label="Parking Space"
                radius="md"
                size="md"
                />
                </>
              )}
            </div>
            {isParkingAvailable !=="No" && (<div>

            <div>
            <Text>Do guests need to reserve a parking space?</Text>
            <NativeSelect
                data={["Reservations not required", "Reservations required"]}
                radius="md"
                size="md"
                style={{width: 'max-content'}}
                />
            </div>
            {isParkingAvailable ==="Yes - Paid" && (<div>
            <Text>Price for Parking Per Day</Text>
            <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                  input : {
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    marginLeft: 10,
                  }}}
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #ced4da",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                  }}
                  />
            </div>)}
                  </div>)}
                </div>
                {/* ----------------------------------------------------------------------------- */}
            {/* Breakfast Module START */}
            <div style={{gap: 8, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconBread size={'50'}/>
                    <Title mt={5}>Breakfast</Title>
                </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20,  marginTop: 10}}>
            <Text>Is breakfast available to guests?</Text>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20}}> 

            <NativeSelect
                data={["No", "Yes", "Yes, Its optional"]}
                value={isBreakfastAvailable}
                onChange={(e) => setIsBreakfastAvailable(e.target.value)}
                radius="md"
                size="md"
                />
                </div>
            </div>
            {isBreakfastAvailable !=="No" && (<div>
            <Text>What type of breakfast is included?</Text>

            <Flex gap={10} mt={10} direction="column">
            {Array.from({ length: numBreakfastFields }).map((_, index) => (
              <Flex justifyContent="center" alignItems="center">
                  <NativeSelect
                    key={index}
                    data={[
                      "Buffet",
                      "Continental",
                      "Full English/Irish",
                      "Vegetarian",
                      "American",
                      "A la carte",
                      "Halal",
                      "Asian",
                      "Vegan",
                      "Gluten-free",
                      "Other"
                    ]}
                    radius="md"
                    size="md"
                    style={{ width: "max-content" }}
                    value={breakfastTypes[index]}
                    onChange={(e) => {
                      const newBreakfastTypes = [...breakfastTypes];
                      newBreakfastTypes[index] = e.target.value;
                      setBreakfastTypes(newBreakfastTypes);
                    }}
                    />
                    {index >= 1 && (
                        <Flex ml={10} gap={5}>
                          <ActionIcon color="red" radius="xl" variant="light" onClick={() => removeBreakfastField(index)}>
                            <IconTrash size="1.125rem" />
                          </ActionIcon>
                        </Flex>
                      )}
                    </Flex>
                    ))}
                    </Flex>
            </div>)}
            {isBreakfastAvailable !== "No" && breakfastTypes < 3 && (
  <Flex mt={10} alignItems="center" justifyContent="center" gap={2}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#07399E",
        borderRadius: "40px",
        height: "25px",
        width: "25px",
        cursor: "pointer",
      }}
    >
      <IconPlus size={15} className="IconBed" onClick={addBreakfastField} />
    </div>
    <Text ml={10} bold size={"md"}>
      Add Another Breakfast Type
    </Text>
  </Flex>
)}


            {isBreakfastAvailable === "Yes, Its optional" && (
            <div>
            <Text>Price for breakfast (per person, per day, <br/> including all fees and taxes)</Text>
            <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                    input : {
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "left",
                        marginLeft: 10,
                    }
                }}
                style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #ced4da",
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                }}
                />
            </div> )}
            
                </div> {/* Breakfast Module END */}

        </div>
        
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column' }}>
                <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconLanguageHiragana size={'50'}/>
                    <Title mt={5}>Languages</Title>
                </div>
                <div style={{ marginTop: 15 }}>
      <Text fw={500}>What languages do you or your staff speak?</Text>
      {languages.map((language, index) => (
        <Flex key={index} mt={10} alignItems="center" gap={2}>
          <NativeSelect
            data={[
              "English",
              "Urdu",
              "Arabic",
              "Hindi",
              "Chinese",
              "Spanish",
              "French",
              "German",
              "Italian",
              "Japanese",
              "Korean",
              "Portuguese",
              "Russian",
              "Turkish",
              "Other",
            ]}
            radius="md"
            size="md"
            style={{ width: 150 }}
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value, index)}
          />
          {index >= 1 && (
            <Flex ml={10} gap={5}>
              <ActionIcon color="red" radius="xl" variant="light" onClick={() => removeLanguageField(index)}>
                <IconTrash size="1.125rem" />
              </ActionIcon>
            </Flex>
          )}
        </Flex>
      ))}
      {languages.length < 3 && (
        <Flex mt={10} alignItems="center" justifyContent="center" gap={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#07399E",
              borderRadius: "40px",
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          >
            <IconPlus size={15} onClick={addLanguageField} />
          </div>
          <Text ml={10} bold size={"md"}>
            Add Another Language
          </Text>
        </Flex>
      )}
      {console.log(languages)}
    </div>
      <div style={{marginTop: 20}}>
            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconApps size={'50'}/>
                    <Title mt={5}>Facilites</Title>
              </div>
                  <div style={{ display: "flex", gap: 50 }}>
      <div style={{ gap: 15, display: "flex", flexDirection: "column", marginTop: 20 }}>
        <Checkbox
          label="Free Wifi"
          icon={IconWifi}
          size="md"
          color="dark"
          name="freeWifi"
          checked={checkboxes.freeWifi}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Bar"
          icon={IconGlass}
          size="md"
          color="dark"
          name="bar"
          checked={checkboxes.bar}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Sauna"
          icon={IconBrightnessHalf}
          size="md"
          color="dark"
          name="sauna"
          checked={checkboxes.sauna}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Garden"
          icon={IconLeaf}
          size="md"
          color="dark"
          name="garden"
          checked={checkboxes.garden}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Terrance"
          icon={IconFence}
          size="md"
          color="dark"
          name="terrance"
          checked={checkboxes.terrance}
          onChange={handleCheckboxChange}
        />
      </div>
          <div style={{ gap: 15, display: "flex", flexDirection: "column", marginTop: 20 }}>
            <Checkbox
              label="No Smoking Rooms"
              icon={IconSmokingNo}
              size="md"
              color="dark"
              name="noSmokingRooms"
              checked={checkboxes.noSmokingRooms}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Family Rooms"
              icon={IconHorseToy}
              size="md"
              color="dark"
              name="familyRooms"
              checked={checkboxes.familyRooms}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Hot tub/Jacuzzi"
              icon={IconBath}
              size="md"
              color="dark"
              name="hotTub"
              checked={checkboxes.hotTub}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Air Conditioning"
              icon={IconAirConditioning}
              size="md"
              color="dark"
              name="airConditioning"
              checked={checkboxes.airConditioning}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Swimming Pool"
              icon={IconPool}
              size="md"
              color="dark"

              name="swimmingPool"
              checked={checkboxes.swimmingPool}
              onChange={handleCheckboxChange}
            />
          </div>
          
    </div>
      </div>
      </div>
      </div>

      
      
      
    </div> 
    </div>
      </>
  )
}

export default PropertyFacilites