import { Title, Text, Flex, TextInput, Tooltip, Select, Button, Image, Switch } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { IconAlertCircle, IconBabyBottle, IconBadges, IconBrandCampaignmonitor, IconCalendar, IconCheck, IconCircle, IconCrown, IconEPassport, IconGenderFemale, IconGenderMale, IconHeartHandshake, IconHierarchy3, IconHorseToy, IconInfoCircle, IconMan, IconQuestionCircle, IconRobot, IconRubberStamp, IconScan, IconUpload, IconX } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

import PassportScan from '../../../../assets/icons/PassportScan.svg'
import { addPassenger, setConfig, setGroupDetails, setPassengerDetails, setPassportDetails, setRelationDetails, setVisaDetails } from '../../../../Redux/Slicers/passengerSlice'

const getCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  const countries = data.map(country => country.name.common);
  return countries;
};

const PassengerAdd = ({setAddPassengerModal}) => {
  const [dob, setDob] = useState(null)
  // make it dipatch to redux
  
  const handleDOBChange = (date) => {
  setDob(date);
  const serializedDate = date.toISOString();
  dispatch(setPassengerDetails({ dob: serializedDate }));
};

  const [maritial_status, setMaritial_status] = useState('')
  const [pob, setPob] = useState('')
  const [relation, setRelation] = useState('')
  const [group_name, setGroup_name] = useState('')
  const [nationality, setNationality] = useState('')
  const [gender, setGender] = useState('')
  const [education, setEducation] = useState('')
  const [issueDate, setIssueDate] = useState(null)
  const [expiryDate, setExpiryDate] = useState(null)
  const [passportType, setPassportType] = useState('')
  const [isFH, setIsFH] = useState(false)
  const [isGH, setIsGH] = useState(false)
  const [IssuingCountry, setIssuingCountry] = useState('')

  // Countries MAP
  const [countries, setCountries] = useState([]);

  //PAX Incomming
  const [label, setLabel] = useState('');

  //handle gender click
  const handleGenderChange = (gender) => {
    setGender(gender)
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchedCountries = await getCountries();
      setCountries(fetchedCountries);
    };

    fetchCountries();
  }, []);
 
  // Calculate age function
 function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const isValidDate = !isNaN(birthDate.getTime()) && birthDate <= today;
  const numericAge = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
  if (!isValidDate) {
    return { valid: false };
  }
  let age;
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age = today.getFullYear() - birthDate.getFullYear() - 1;
  } else {
    age = today.getFullYear() - birthDate.getFullYear();
  }

  let displayAge;
  if (age < 1) {
    const monthAge = (today.getMonth() + 12 - birthDate.getMonth()) % 12;
    if (monthAge < 1) {
      const dayAge = Math.round((today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24));
      displayAge = `${dayAge} day${dayAge !== 1 ? 's' : ''}`;
    } else {
      displayAge = `${monthAge} month${monthAge !== 1 ? 's' : ''}`;
    }
  } else {
    displayAge = `${age} year${age !== 1 ? 's' : ''}`;
  } 
  return { valid: true, age: displayAge, numericAge: numericAge };
  
  
}

function checkPassportValidity (issueDate, expiryDate) {
  const today = new Date();
  const issueDateDate = new Date(issueDate);
  const expiryDateDate = new Date(expiryDate);
  const sixMonthsFromToday = new Date(today.setMonth(today.getMonth() + 6));
  const isValidDate = !isNaN(issueDateDate.getTime()) && issueDateDate <= today && !isNaN(expiryDateDate.getTime()) && expiryDateDate >= sixMonthsFromToday;
  if (!isValidDate) {
    return { valid: false };
  }
  return { valid: true };
}

//married check
function isMarriedCheck(maritial_status) {
  if (maritial_status === 'Married') {
    return { valid: true };
  }
  return { valid: false };
}

const isMarried = isMarriedCheck(maritial_status)

// Check if passenger requires guardian or mehram for umrah passengers
const requiresGuardian = (gender, dateOfBirth, isMarried) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const isValidDate = !isNaN(birthDate.getTime()) && birthDate <= today;

  if (!isValidDate) {
    return { valid: false };
  }

  const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

  if (gender === 'Female') {
    if (age > 40 && !isMarried) {
      return { valid: false };
    } else if (age < 12) {
      return { valid: true };
    };
    return { valid: true };
  }

  if (gender === 'Male' && age < 12) {
    return { valid: true };
  }

  return { valid: age < 18 };
}

const mehramCheck = requiresGuardian(gender, dob, isMarried);

const checkPassport = checkPassportValidity(issueDate, expiryDate);

// Usage
const result = calculateAge(dob);

const dispatch = useDispatch();
const passengerDetails = useSelector(state => state.passengers.passengerDetails);
const visaDetails = useSelector(state => state.passengers.visaDetails);


const handleAddPassenger = () => {
  dispatch(setPassengerDetails({ ...passengerDetails, age: result.numericAge, passport_valid: checkPassport.valid, pax: label, maritial_status: maritial_status,
  pob:pob, nationality: nationality, education: education, gender: gender, passengerUUID: uuidv4()}));
  dispatch(setPassportDetails({ passport_type: passportType, issue_date: issueDate.toISOString(), expiry_date: expiryDate.toISOString(), issuing_country: IssuingCountry }));
  dispatch(setRelationDetails({ relation: relation }));
  dispatch(setGroupDetails({ group_name: group_name }));
  dispatch(setConfig({ isFH: isFH, isGH: isGH }));
  dispatch(addPassenger());
  setAddPassengerModal(false);
}

console.log(isGH)

  return (
    <>
    <Flex p={15} direction={'column'}>
      <Flex justify={'space-between'} >
        <Flex direction={'column'} gap={5}>
            <Title ff={'Kumbh Sans'} fw={700}>Add New Passenger</Title>
            <Text ff={'Kumbh Sans'} fw={400}>You can either manually enter the passport details or just upload or scan the passport <br/> and we will automatically fill in the details for you. </Text>
        </Flex>
        <Flex direction={'column'} bg={'rgba(0, 0, 0, 0.06)'} p={15} sx={{borderRadius: 15, zIndex: 1}}>
          <Text>Leadership Control</Text>
          <Flex direction={'column'} gap={10} mt={20} >    
            <Switch label="Family Head" color="yellow" onLabel={<IconCrown stroke={2.5} size={'20px'}/>} onChange={() => setIsFH(!isFH)}/> 
            <Switch label="Group Head" color="violet" onLabel={<IconBrandCampaignmonitor size={'20px'} stroke={2.5} />} onChange={() => setIsGH(!isGH)}/> 
          </Flex>
        </Flex>
      </Flex>
        <Flex mt={35} gap={50} mb={20}>
          {/* Passenger Details */}
            <Flex direction={'column'}>
                <Flex gap={10}><IconMan/><Text ff={'Kumbh Sans'} fw={700}>Passenger Details</Text></Flex>
                    <Flex direction={'column'} gap={10} mt={20} w={350}>
                        <InputCustom heading={'Passport Number'} info={'The passport number located on the first page'}
                        dispatch={dispatch} dispatchType={passengerDetails} val="passport_number"/>
                            <Flex gap={10}>
                                <InputCustom heading={'Given Name'} info={"The individual's first name, as it appears on their passport"} 
                                dispatch={dispatch} dispatchType={passengerDetails} val="given_name"/>
                                <InputCustom heading={'Surname'} info={"The individual's last name, as it appears on their passport"}
                                dispatch={dispatch} dispatchType={passengerDetails} val="surname"/>
                            </Flex>
                            {/* Gender and Maritial Status */}
                            <Flex gap={10}>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Gender</Text>
                                    <Flex gap={5} mt={5}>
                                    <QSelect
                                        iconQ={<IconGenderFemale />}
                                        textQ={'Female'}
                                        selected={gender === 'Female'}
                                        onClick={() => handleGenderChange('Female')}
                                      />
                                      <QSelect
                                        iconQ={<IconGenderMale />}
                                        textQ={'Male'}
                                        selected={gender === 'Male'}
                                        onClick={() => handleGenderChange('Male')}
                                      />
                                    </Flex>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Maritial Status</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        data={['Single', 'Married', 'Divorced', 'Widowed']}
                                        onChange={(selectedOption) => setMaritial_status(selectedOption)}
                                        styles={{
                                            input: {
                                                height: 30,
                                                border: '1px solid #D0D5DD',
                                                boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                            }
                                        }}
                                        />
                                </Flex>
                            </Flex>
                            {/* Gender and Maritial Status ENDE */}
                            {/* Age and PAX */}
                            <Flex direction={'column'}>
                                  <Text fz={15} ff={'Kumbh Sans'} fw={500}>Date of Birth</Text>
                                  <DateInput
                                      value={dob}
                                      onChange={handleDOBChange}
                                      mt={5}
                                      rightSection={<IconCalendar color={'#D0D5DD'} size={20}/>}
                                      radius={12}
                                      styles={{
                                        input: {
                                          height: 30,
                                          border: '1px solid #D0D5DD',
                                          boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                        }
                                    }}
                                    />
                                    <Flex gap={5}>  
                                        <AgeInfo result={result}/>
                                        <PAX result={result} setLabel={setLabel}/>
                                    </Flex>
                              </Flex>
                              {/* Age and PAX ENDE */}
                              <Flex gap={10}>

                              <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Place of Birth</Text>
                                    <Select
                                        mt={5}
                                        searchable
                                        radius={12}
                                        onChange={(selectedOption) => setPob(selectedOption)}
                                        data={countries}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                              <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Nationality</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        searchable
                                        onChange={(selectedOption) => setNationality(selectedOption)}
                                        data={countries}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Education</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        searchable
                                        onChange={(selectedOption) => setEducation(selectedOption)}
                                        data={['High School', 'Bachelors', 'Masters', 'PhD', 'Other']}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                            
                    </Flex>
            </Flex>
            {/* Passenger Details ENDE */}

            {/* Passport Details */}
            <Flex direction={'column'}>
                <Flex gap={10}><IconEPassport/><Text ff={'Kumbh Sans'} fw={700}>Passport Details</Text></Flex>
                    <Flex direction={'column'} gap={10} mt={20} w={350}>
                    <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Passport Type</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        onChange={(selectedOption) => setPassportType(selectedOption)}
                                        searchable
                                        data={['Ordinary', 'Diplomatic', 'Official', 'Emergency', 'Collective', 'Family', 'Refugee']}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                                <Flex gap={10}>
                                          <Flex direction={'column'}>
                                          <Text fz={15} ff={'Kumbh Sans'} fw={500}>Issue Date</Text>
                                                <DateInput
                                                    mt={5}
                                                    value={issueDate}
                                                    onChange={setIssueDate}
                                                    rightSection={<IconCalendar color={'#D0D5DD'} size={20}/>}
                                                    radius={12}
                                                    styles={{
                                                      input: {
                                                        height: 30,
                                                        border: '1px solid #D0D5DD',
                                                        boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                                      }
                                                  }}
                                                  />
                                          </Flex>
                                          <Flex direction={'column'}>
                                          <Text fz={15} ff={'Kumbh Sans'} fw={500}>Expiry Date</Text>
                                                <DateInput
                                                    value={expiryDate}
                                                    onChange={setExpiryDate}
                                                    mt={5}
                                                    rightSection={<IconCalendar color={'#D0D5DD'} size={20}/>}
                                                    radius={12}
                                                    styles={{
                                                      input: {
                                                        height: 30,
                                                        border: '1px solid #D0D5DD',
                                                        boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                                      }
                                                  }}
                                                  />
                                          </Flex>
                                  </Flex>
                                          <PassportValid checkPassport={checkPassport}/>
                            {/* Issue Country */}
                            <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Issuing Country</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        searchable
                                        onChange={(selectedOption) => setIssuingCountry(selectedOption)}
                                        data={countries}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                            {/* Gender and Maritial Status ENDE */}
                            {/* Visa Information Start */}
                            <Flex direction={'column'} mt={20}>
                              <Flex gap={10}><IconRubberStamp/><Text ff={'Kumbh Sans'} fw={700}>Visa Details</Text></Flex>
                              <Flex mt={20} direction={'column'}>
                                <Flex gap={10}>
                                <InputCustom heading={'Visa Number'} info={'Visa Number'}
                                dispatch={dispatch} dispatchType={visaDetails} val="visa_number" 
                                setDispatchType={'Visa'}/>
                                <Button bg={'#07399E'} sx={{borderRadius: 12}} mt={28}>Import from Excel</Button>
                                </Flex>
                              </Flex>
                            </Flex>
                            {/* Visa Information ENDE */}

                            {/* Relation Information Start */}
                            {
                                mehramCheck.valid
                                  ? (
                                    <Flex direction={'column'} mt={20}>
                                      <Flex gap={10}><IconHeartHandshake /><Text ff={'Kumbh Sans'} fw={700}>Relation Details</Text></Flex>
                                      <Flex mt={20} direction={'column'}>
                                        <Flex gap={10}>
                                          <Flex direction={'column'}>
                                            <Text fz={15} ff={'Kumbh Sans'} fw={500}>Relation</Text>
                                            <Select
                                              mt={5}
                                              radius={12}
                                              searchable
                                              onChange={(selectedOption) => setRelation(selectedOption)}
                                              data={['Father', 'Mother', 'Brother', 'Sister', 'Son', 'Daughter', 'Husband', 'Other']}
                                              styles={{
                                                input: {
                                                  height: 30,
                                                  border: '1px solid #D0D5DD',
                                                  boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)',
                                                },
                                              }}
                                            />
                                          </Flex>
                                          <Button bg={'#07399E'} sx={{ borderRadius: 12 }} mt={28}>
                                            Select Passenger
                                          </Button>
                                        </Flex>
                                      </Flex>
                                    </Flex>
                                  )
                                  : null
                              }

                            {/* Relation Information ENDE */}
                    </Flex>
            </Flex>
            {/* Passport Details ENDE */}

            {/* Passport AI Scan */}
            <Flex direction={'column'}>
                <Flex gap={10}><IconHierarchy3/><Text ff={'Kumbh Sans'} fw={700}>Group Details</Text></Flex>
                    <Flex direction={'column'} gap={10} mt={20} w={350}>
                      {/* Group */}
                                <Flex gap={10}>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Assign Group</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        onChange={(selectedOption) => setGroup_name(selectedOption)}
                                        searchable
                                        data={['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9', 'Group 10']}
                                        styles={{
                                          input: {
                                            height: 30,
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                                          }
                                        }}
                                        />
                                </Flex>
                                <Button bg={'#07399E'} sx={{borderRadius: 12}} mt={28}>Add New Group</Button>
                                </Flex>   
                      {/* Group ENDE */}
                      <Flex justify={'center'} align={'center'} direction={'column'} p={'30px 0px 30px 0px'} mt={20} sx={{borderRadius: 19, border: '2px solid #07399E'}}>

                        <Image src={PassportScan} width={150}/>
                        <Flex direction={'column'} mt={25}>
                            <Flex justify={'center'}><Text align='center' fz={40} ff={'Kumbh Sans'} fw={700}>AI Scan</Text><IconRobot color='purple'/></Flex>
                            <Text align='center' w={200} fz={14} ff={'Kumbh Sans'} fw={500}>Upload or Scan the passport, and we will use AI and MRZ Scan to fill in the details</Text>
                        </Flex>
                        
                        <Flex gap={20} mt={20}>
                          <Button bg={'#07399E'} sx={{borderRadius: 12, padding: '0px 30px 0px 30px'}} ><IconUpload/></Button>
                          <Button bg={'#07399E'} sx={{borderRadius: 12, padding: '0px 30px 0px 30px'}}><IconScan/></Button>
                        </Flex>

                      </Flex>
                    </Flex>
            </Flex>
            {/* Passport AI Scan ENDE */}
        </Flex>
        <Button onClick={handleAddPassenger} w={'max-content'} 
        sx={{bottom: 10, right: 15, position: 'absolute'}}>Add {passengerDetails?.given_name}</Button>
    </Flex>
    </>
  )
}

function InputCustom({ placeholder, heading, info, dispatchType, val, setDispatchType }) {
  const dispatch = useDispatch();
  // make it so that if setDispatchType is Visa then use setVisaDetails
  
  const handleChange = (e) => {
    if (setDispatchType === "Visa") {
      dispatch(setVisaDetails({ [val]: e.currentTarget.value }));
    } else {
      dispatch(setPassengerDetails({ [val]: e.currentTarget.value }));
    }
  };
  
  return (
    <Flex gap={20} direction="column">
      <Text fz={15} ff="Kumbh Sans" fw={500}>
        {heading}
      </Text>
      <TextInput
        placeholder={placeholder}
        mt={-15}
        radius={12}
        value={dispatchType && dispatchType[val] ? dispatchType[val] : ''}
        onChange={handleChange}
        rightSection={
          info ? (
            <Tooltip label={`${info}`} withArrow arrowSize={6} arrowRadius={4}>
              <div>
                <IconQuestionCircle color={'#D0D5DD'} style={{ marginTop: 5 }} size={20} />
              </div>
            </Tooltip>
          ) : ''
        }
        styles={{
          input: {
            height: 30,
            border: '1px solid #D0D5DD',
            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)',
          },
        }}
      />
    </Flex>
  );
}

function QSelect({iconQ, textQ, onClick, selected}) {
  const bgColor = selected ? '#07399E' : 'rgba(0, 0, 0, 0.06)';
  const textColor = selected ? 'white' : 'black';

  return (
    <Flex
      p={8}
      h={20}
      bg={bgColor}
      justify={'center'}
      align={'center'}
      sx={{
        borderRadius: 8,
        color: `${textColor}`,
        ':hover': {
          cursor: 'pointer',
          backgroundColor: '#07399E',
          color: 'white',
          transform: 'scale(1.1)',
          transition: 'all 0.2s ease-in-out'
        }
      }}
      onClick={onClick}
    >
      {iconQ}
      <Text>{textQ}</Text>
    </Flex>
  );
}

function AgeInfo({result}) {
  if (result.valid) {
    const displayAge = result.age;
    
    return (
      <Flex bg={'rgba(56, 112, 255, 0.13)'} gap={10} justify={'center'} align={'center'} p={'8px 15px 8px 15px'} mt={10} sx={{borderRadius: 25}} w={'max-content'}>
        <IconInfoCircle color={'#00379D'} size={20}/> <Text color='#00379D'>{displayAge} old</Text>
      </Flex>
    );
  } else {
    return (
      <Flex bg={'rgba(255, 56, 56, 0.13)'} gap={10} justify={'center'} align={'center'} p={'8px 15px 8px 15px'} mt={10} sx={{borderRadius: 25}}>
        <IconAlertCircle color={'#00154D'} size={20}/> <Text color='#00154D'>Please enter a valid date of birth</Text>
      </Flex>
    );
  }
}

function PAX({ result, setLabel }) {
  if (result.valid) {
    const age = result.numericAge;
    let label, icon;
    if (age >= 18) {
      label = "Adult";
      icon = <IconBadges color={"black"} size={20} />;
    } else if (age >= 3) {
      label = "Child";
      icon = <IconHorseToy color={"black"} size={20} />;
    } else {
      label = "Infant";
      icon = <IconBabyBottle color={"black"} size={20} />;
    }
    setLabel(label);
    return (
      <Flex
        bg={"rgba(0, 0, 0, 0.06)"}
        gap={10}
        justify={"center"}
        align={"center"}
        p={"8px 15px 8px 15px"}
        mt={10}
        sx={{ borderRadius: 25 }}
        w={"max-content"}
      >
        {icon} <Text color="black">{label}</Text>
      </Flex>
    );
  } else ''
}

function PassportValid({ checkPassport}) {
  if (checkPassport.valid) {
    return (
      <Flex
        bg={"rgba(56, 255, 76, 0.13)"}
        gap={10}
        justify={"center"}
        align={"center"}
        p={"8px 15px 8px 15px"}
        mt={10}
        sx={{ borderRadius: 25 }}
        w={"max-content"}
      >
        <IconCheck color={'#004D1F'}/> <Text color="#004D1F">Valid Passport</Text>
      </Flex>
    );
  } else {
    return (
      <Flex
        bg={'rgba(255, 56, 56, 0.13)'}
        gap={10}
        justify={"center"}
        align={"center"}
        p={"8px 15px 8px 15px"}
        mt={10}
        sx={{ borderRadius: 25 }}
        w={"max-content"}
      >
        <IconX color={'#4D0000'}/> <Text color="#4D0000">Invalid Passport</Text>
      </Flex>
    );
  }
}




  export default PassengerAdd