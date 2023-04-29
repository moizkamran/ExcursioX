import { Title, Text, Flex, TextInput, Tooltip, Select } from '@mantine/core'
import { IconCircle, IconGenderFemale, IconGenderMale, IconMan, IconQuestionCircle } from '@tabler/icons'
import React from 'react'

const PassengerAdd = () => {
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
      <IconQuestionCircle  color='gray' style={{marginTop:5}}/>
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
  export default PassengerAdd