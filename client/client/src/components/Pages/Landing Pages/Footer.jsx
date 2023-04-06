import { Avatar, Container, Flex, Grid, Group, Image, Select, Text, Title } from '@mantine/core'

import BSWhiteLogo from '../../../assets/booking-souq-white.svg'
import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Footer = () => {
  const regions = [
    {
      image: 'https://flagcdn.com/w40/ae.png',
      label: 'United Arab Emirates',
      value: 'AE',
    },
    {
      image: 'https://flagcdn.com/w40/sa.png',
      label: 'Saudi Arabia',
      value: 'SA',
    },
    {
      image: 'https://flagcdn.com/w40/pk.png',
      label: 'Pakistan',
      value: 'PK',
    },
    {
      image: 'https://flagcdn.com/w40/om.png',
      label: 'Oman',
      value: 'OM',
    },
    {
      image: 'https://flagcdn.com/w40/qa.png',
      label: 'Qatar',
      value: 'QA',
    },
    {
      image: 'https://flagcdn.com/w40/bh.png',
      label: 'Bahrain',
      value: 'BH',
    },
    {
      image: 'https://flagcdn.com/w40/kw.png',
      label: 'Kuwait',
      value: 'KW',
    },
    {
      image: 'https://flagcdn.com/w40/eg.png',
      label: 'Egypt',
      value: 'EG',
    },
    {
      image: 'https://flagcdn.com/w40/jo.png',
      label: 'Jordan',
      value: 'JO',
    },
    {
      image: 'https://flagcdn.com/w40/ma.png',
      label: 'Morocco',
      value: 'MA',
    },
    {
      image: 'https://flagcdn.com/w40/tr.png',
      label: 'Turkey',
      value: 'TR',
    },
  ];

  const [region, setRegion] = useState('');
  console.log(region);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { data } = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=c240e0ecad5244059d7f5415a0e9a06c`);
        const addressComponents = data.results[0].components;
        setRegion(addressComponents.region || addressComponents.state || '');
      },
      (error) => console.error(error),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }
    );
  }, []);
  
  const SelectItem = forwardRef(({ image, label, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Image src={image} width={20} />
  
        <div>
          <Text size="sm">{label}</Text>
          
        </div>
      </Group>
    </div>
  ));

  const enterpriseLinks = [
    { label: 'Overview', path: '/about-us' },
    { label: 'Features', path: '/Features' },
    { label: 'Solutions', path: '/Solutions' },
    { label: 'Tutorials', path: '/Tutorials' },
    { label: 'Pricing', path: '/Pricing' },
    { label: 'Releases', path: '/Releases' },
    { label: 'auw', path: '/Releases' },
    { label: 'hellp', path: '/Releases' },
  ];
  
  const enterprisePrefix = '/enterprise';
  

  return (
    <>
      <div style={{width: 'inherit', height: 20, backgroundColor: '#07399E', 
      borderRadius: '21px 21px 0px 0px', marginTop: 500}}></div>
    <Container bg={'#151515'} size={'100%'} h={'500px'} sx={{position: 'relative', color: 'white'}}>
      <Flex p={50}>

        <Flex direction={'column'} w={300} gap={20}>
          <Image src={BSWhiteLogo} width={200}/>
          <Text ff={'Kumbh Sans'} fw={400}>A Innovative Robust OTA Power
                Management System</Text>
          <Title ff={'Kumbh Sans'} fw={600} fz={25}>Your Region</Title>
          <Select
            placeholder={region? region : 'Select your region'}
            itemComponent={SelectItem}
            defaultValue={region? region : 'Select your region'}
            searchable
            onChange={(value) => setRegion(value)}
            nothingFound="No options"
            dropdownPosition='bottom'

            data={regions}
            w={180}
            maxDropdownHeight={150}
            icon={<Image src={region? `https://flagcdn.com/w40/${region.toLowerCase()}.png` : ''} />}
            styles={{
              input: {
                backgroundColor: '#2F2F2F',
                color: 'white',
                border: '1px solid #151515',
                borderRadius: 10,
                marginLeft: 50,
                cursor: 'pointer',
              },
              wrapper: {
                display: 'flex',
              },
              rightSection: {
                display: 'none',
              },

            }}
          />
        </Flex>

        <Flex>
        <Grid gutter={20}>
          <Grid.Col span={3}>
            <Flex direction={'column'} gap={14}>
            <Title ff={'Kumbh Sans'} fw={500} fz={15} c='rgba(255, 255, 255, 0.53)' >Company</Title>
            {enterpriseLinks.map(({ label, path }) => (
  <Text key={path} ff={'Kumbh Sans'} fw={600} fz={20} component={Link} to={`${enterprisePrefix}${path}`}>
    {label}
  </Text>
))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={20}>
              <Title ff={'Kumbh Sans'} fw={600} fz={25}>Company</Title>
              <Text ff={'Kumbh Sans'} fw={400}>About Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Careers</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Contact Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Terms & Conditions</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Privacy Policy</Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={20}>
              <Title ff={'Kumbh Sans'} fw={600} fz={25}>Company</Title>
              <Text ff={'Kumbh Sans'} fw={400}>About Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Careers</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Contact Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Terms & Conditions</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Privacy Policy</Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={20}>
              <Title ff={'Kumbh Sans'} fw={600} fz={25}>Company</Title>
              <Text ff={'Kumbh Sans'} fw={400}>About Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Careers</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Contact Us</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Terms & Conditions</Text>
              <Text ff={'Kumbh Sans'} fw={400}>Privacy Policy</Text>
            </Flex>
          </Grid.Col>
        </Grid>
        </Flex>

      </Flex>
    </Container>
    </>
  )
}

export default Footer