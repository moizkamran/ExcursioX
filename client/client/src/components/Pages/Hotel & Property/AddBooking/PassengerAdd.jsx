import { Title, Text, Flex, TextInput, Tooltip, Select } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { IconAlertCircle, IconBabyBottle, IconBadges, IconCalendar, IconCircle, IconGenderFemale, IconGenderMale, IconHorseToy, IconInfoCircle, IconMan, IconQuestionCircle } from '@tabler/icons'
import React, { useEffect, useState } from 'react'

const getCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  const countries = data.map(country => country.name.common);
  return countries;
};

const PassengerAdd = () => {
  const [dob, setDob] = useState(null)
  // Countries MAP
  const [countries, setCountries] = useState([]);

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


// Usage
const result = calculateAge(dob);

  return (
    <>
    <Flex p={15} direction={'column'}>
        <Flex direction={'column'} gap={5}>
            <Title ff={'Kumbh Sans'} fw={700}>Add New Passenger</Title>
            <Text ff={'Kumbh Sans'} fw={400}>You can either manually enter the passport details or just upload or scan the passport <br/> and we will automatically fill in the details for you. </Text>
        </Flex>
        <Flex mt={35}>
            <Flex direction={'column'}>
                <Flex gap={10}><IconMan/><Text ff={'Kumbh Sans'} fw={700}>Passenger Details</Text></Flex>
                    <Flex direction={'column'} gap={10} mt={20} w={300}>
                        <InputCustom heading={'Passport Number'} info={'The passport number located on the first page'}/>
                            <Flex gap={10}>
                                <InputCustom heading={'Given Name'} info={"The individual's first name, as it appears on their passport"}/>
                                <InputCustom heading={'Surname'} info={"The individual's last name, as it appears on their passport"}/>
                            </Flex>
                            {/* Gender and Maritial Status */}
                            <Flex gap={10}>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Gender</Text>
                                    <Flex gap={5} mt={5}>
                                        <QSelect   iconQ={<IconGenderFemale/>} textQ={'Female'}  />
                                        <QSelect   iconQ={<IconGenderMale/>} textQ={'Male'}  />
                                    </Flex>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Maritial Status</Text>
                                    <Select
                                        mt={5}
                                        radius={12}
                                        data={['Single', 'Married', 'Divorced', 'Widowed']}
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
                                      onChange={setDob}
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
                                    {result.age?(<Flex gap={5}>  
                                        <AgeInfo result={result}/>
                                        <PAX result={result}/>
                                    </Flex>):''}
                              </Flex>
                              {/* Age and PAX ENDE */}
                              <Flex gap={10}>

                              <Flex direction={'column'}>
                                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Place of Birth</Text>
                                    <Select
                                        mt={5}
                                        searchable
                                        radius={12}
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
                            
                    </Flex>
            </Flex>
        </Flex>
    </Flex>
    </>
  )
}

function InputCustom({placeholder, heading, info, dispatch, enterpriseDetails, val}) {
    return (
    
    <Flex gap={20}direction={'column'}> 
      <Text fz={15} ff={'Kumbh Sans'} fw={500}>{heading}</Text>
      <TextInput placeholder={placeholder}  mt={-15} radius={12}
      rightSection={info ? (<Tooltip label={`${info}`} withArrow arrowSize={6} arrowRadius={4}>
        <div>
      <IconQuestionCircle  color={'#D0D5DD'} style={{marginTop:5}} size={20}/>
        </div>
    </Tooltip>):''
    }
    //   value={enterpriseDetails && enterpriseDetails[val] ? enterpriseDetails[val] : ''}

    //   onChange={(e) => dispatch(setEnterpriseDetails({[val]: e.currentTarget.value}))}
      
      styles={{
  input: {
    height: 30,
    border: '1px solid #D0D5DD',
    boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
  }
  }} />
      </Flex>);
  }

function QSelect({iconQ, textQ}) {
  return (<Flex p={8} h={20} bg={'#D9D9D9'} justify={'center'} align={'center'} sx={{
borderRadius: 8,
':hover': {
cursor: 'pointer',
backgroundColor: '#07399E',
color: 'white',
transform: 'scale(1.1)',
transition: 'all 0.2s ease-in-out'
}
}}>{iconQ}<Text>{textQ}</Text></Flex>);
}

function AgeInfo({result}) {
  if (result.valid) {
    const displayAge = result.age;
    
    return (
      <Flex bg={'rgba(7, 57, 158, 0.18)'} gap={10} justify={'center'} align={'center'} p={'8px 15px 8px 15px'} mt={10} sx={{borderRadius: 25}} w={'max-content'}>
        <IconInfoCircle color={'#00379D'} size={20}/> <Text color='#00379D'>{displayAge} old</Text>
      </Flex>
    );
  } else {
    return (
      <Flex bg={'rgba(255, 0, 0, 0.2)'} gap={10} justify={'center'} align={'center'} p={'8px 15px 8px 15px'} mt={10} sx={{borderRadius: 25}}>
        <IconAlertCircle color={'#FF0000'} size={20}/> <Text color='#FF0000'>Please enter a valid date of birth</Text>
      </Flex>
    );
  }
}

function PAX({ result }) {
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




  export default PassengerAdd