import { Button, Flex, Image, PinInput, Select, Text, TextInput } from '@mantine/core'
import { IconArrowRight, IconCrown, IconQuestionCircle, IconSend } from '@tabler/icons'
import { motion as m } from 'framer-motion'
import PhotosComponent from '../../../Hotel & Property/AddProperty/components/Functions/PhotosComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setEnterpriseDetails, setEnterpriseOwner } from '../../../../../Redux/Slicers/enterpriseSlice';

const Verfiy = () => {
  const enterpriseDetails = useSelector(state => state.enterprise.enterpriseDetails);
  const enterpriseOwner = useSelector(state => state.enterprise.enterpriseOwner);
  const ep_size = useSelector(state => state.enterprise.enterpriseDetails.enterpriseSize);
  const [selectedItem, setSelectedItem] = useState(ep_size);

  const handleSelect = (size) => {
    setSelectedItem(size);
  };

  const dispatch = useDispatch();

  const roles = [
    { label: 'CEO', value: 'ceo' },
    { label: 'CTO', value: 'cto' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Supervisor', value: 'supervisor' },
    { label: 'Agent', value: 'agent' },
    { label: 'Travel Consultant', value: 'travel_consultant' },
    { label: 'Sales Executive', value: 'sales_executive' },
    { label: 'Operations Coordinator', value: 'operations_coordinator' },
    { label: 'Destination Specialist', value: 'destination_specialist' },
    { label: 'Marketing Manager', value: 'marketing_manager' },
    { label: 'Customer Service Representative', value: 'customer_service_rep' },
    { label: 'Tour Guide', value: 'tour_guide' },
    { label: 'Travel Writer', value: 'travel_writer' },
    { label: 'Group Travel Coordinator', value: 'group_travel_coordinator' },
    { label: 'Cruise Specialist', value: 'cruise_specialist' },
    { label: 'Event Planner', value: 'event_planner' },
    { label: 'Ticketing Agent', value: 'ticketing_agent' },
    { label: 'Visa Specialist', value: 'visa_specialist' },
    { label: 'Travel Insurance Agent', value: 'travel_insurance_agent' },
    { label: 'Concierge', value: 'concierge' },
  ];

  
  return (
    
    <m.div 
    style={{position: 'absolute', width: '65%', height: '70%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
    <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={50}>Let's get you verified</Text>

    <Flex>
      <Flex gap={20} direction={'column'}>
          {/* EMAIL */}
          <Email   dispatch={dispatch} enterpriseDetails={enterpriseDetails} />
          {/* PIN */}
          <PIN    dispatch={dispatch} enterpriseDetails={enterpriseDetails} />

          {/* ENTERPRISE EMP DETAILS */}
            <Flex direction={'column'} gap={20} mt={20}>
            {/* YOUR ROLE */}
              <RoleInCompany   roles={roles}  dispatch={dispatch} enterpriseOwner={enterpriseOwner}/>
              {/* ENTERPRISE SIZE */}
              <Flex direction={'column'} gap={10}>
                  <Text fz={25} ff={'Kumbh Sans'} fw={500}>How big is the company?</Text>
                  <Flex gap={10} mt={10}>
                    <EnterpriseSize   icon={<IconCrown />} size={'1 - 20'}  dispatch={dispatch} enterpriseSize={ep_size} onSelect={handleSelect}/>
                    <EnterpriseSize   icon={<IconCrown />} size={'20 - 100'}  dispatch={dispatch} enterpriseSize={ep_size} onSelect={handleSelect}/>
                  </Flex>
                  <Flex gap={10} >
                    <EnterpriseSize   icon={<IconCrown />} size={'100 - 500'} dispatch={dispatch} enterpriseSize={ep_size} onSelect={handleSelect} />
                    <EnterpriseSize   icon={<IconCrown />} size={'1000+'}  dispatch={dispatch} enterpriseSize={ep_size} onSelect={handleSelect}/>
                  </Flex>
              </Flex>
            </Flex>
          
      </Flex>
      <Flex direction={'column'} gap={20} ml={50}>
        <Flex gap={10} align={'center'}>
          <Image src={'https://www.svgrepo.com/show/438412/court-round.svg'} width={60}/>
          <Text fz={25} ff={'Kumbh Sans'} fw={600}>Legal Business Proof <br/> Document</Text>
        </Flex>
        <Text fz={18} ff={'Kumbh Sans'} w={400} fw={400} >
        State law requires us to ask for valid
        proof that you have rights to conduct
        business with fields related to Aviation,
        Transport, Accommodation, 
        Travel & Tourism or Visa Services
        </Text>
        <Flex mt={-15} gap={8} align={'center'}>
          <IconArrowRight color='#07399E'/>
          <Text c={'#07399E'} >Learn More</Text>
        </Flex> 
        <PhotosComponent /> 
      </Flex>
    </Flex>
    
    </m.div>
  )
}


function EnterpriseSize({icon, size, dispatch, enterpriseSize, isSelected, onSelect}) {
  const handleClick = () => {
    onSelect(size);
    dispatch(setEnterpriseDetails({ enterpriseSize: size }));
  };

  isSelected = enterpriseSize === size;

  return (
  <Flex 
  onClick={handleClick}
  bg={isSelected ? '#222323' : '#F8F8F8'}
  sx={{
            borderRadius: 8,
            border: '0.707865px solid #D0D5DD',
            width: 160,
            cursor: 'pointer',
            height: 50,
            color: isSelected ? 'white' : 'black',
            transition: 'all 0.3s ease',
            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)',
            '&:hover':{
                      backgroundColor: '#222323',
                      color: isSelected ? 'white' : 'white',
                      transform: 'scale(1.09)',
                      boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
                      },
}} align={'center'} justify={'center'}>
              {icon} <Text ml={10} fz={18} ff={'Kumbh Sans'} fw={600}>{size}</Text>
            </Flex>);
}

function Email({dispatch, enterpriseDetails: {enterpriseEmail}}) {
  return (<Flex gap={20} align={'center'}>
    <TextInput placeholder={'Enter your email'} w={250}
    value={enterpriseEmail} 
    onChange={(e) => {
      const email = e.target.value;
      dispatch(setEnterpriseDetails({ enterpriseEmail: email }));
      
    }}
    styles={{
input: {
  height: 40,
  border: '1px solid #D0D5DD',
  borderRadius: 10,
  boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
}
}} /> <Button sx={{
backgroundColor: 'black',
borderRadius: 8,
height: 40
}}><IconSend /></Button>
    </Flex>);
}

function PIN({dispatch, enterpriseDetails: {verify_PIN_State}}) {
  return (<Flex gap={20} align={'center'}>
      <PinInput length={4} size='md'
      value={verify_PIN_State}
      type="number"
      onChange={(pin) => {
        dispatch(setEnterpriseDetails({ verify_PIN_State: pin }));
      }}
      styles={{
input: {
  height: 40,
  border: '1px solid #D0D5DD',
  borderRadius: 10,
  boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
}
}} />
        <Flex align={'center'}>
            <IconQuestionCircle size={20} color={'#07399E'} />
          <Flex direction={'column'}>
            <Text ml={10}>Did not recieve any code yet?</Text>
            <Text ml={10} color={'#07399E'} sx={{
    cursor: 'pointer'
  }}>Resend in 0:23</Text>
          </Flex>
        </Flex>
    </Flex>);
}
  
function RoleInCompany({roles, dispatch, enterpriseOwner: {role}}) {
  return (<Flex direction={'column'} gap={10}>
            <Text fz={25} ff={'Kumbh Sans'} fw={500}>Your role in the company</Text>
            <Select placeholder={'Select your role'} w={250} 
            value={role}
            onChange={(role) => {
              dispatch(setEnterpriseOwner({ role }));
            }}
            
            styles={{
                    input: {
                      height: 40,
                      border: '1px solid #D0D5DD',
                      borderRadius: 10,
                      boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                    }
}} data={roles} />
        </Flex>);
}

export default Verfiy