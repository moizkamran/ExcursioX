import { Avatar, Button, Container, Flex, Grid, Group, Image, Select, Text, TextInput, Title } from '@mantine/core'

import BSWhiteLogo from '../../../assets/booking-souq-white.svg'
import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconMailOpened, IconRadar } from '@tabler/icons';


const Footer = () => {
  // Footer Locale selections manualy
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

  // AUTO DETECT REGION
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
  
  // For showing flags in select
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

  // Footer Links Map
  const enterpriseLinks = [
    { label: 'Overview', path: '/overview' },
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Tutorials', path: '/tutorials' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Releases', path: '/releases' },
    // COMPANY
    { label: 'About us', path: '/about-us' },
    { label: 'Careers', path: '/careers' },
    { label: 'Partners', path: '/partners' },
    { label: 'News', path: '/news' },
    { label: 'Media Kit', path: '/media-kit' },
    { label: 'Investor', path: '/investor' },
    // Legal
    { label: 'Terms', path: '/terms' },
    { label: 'Privacy', path: '/privacy' },
    { label: 'Cookies', path: '/cookies' },
    { label: 'Licences', path: '/licences' },
    { label: 'Security', path: '/security' },
    { label: 'Sitemap', path: '/sitemap' },
    // Resources
    { label: 'Blog', path: '/blog' },
    { label: 'Newsletter', path: '/newsletter' },
    { label: 'Events', path: '/events' },
    { label: 'Help Center', path: '/help-center' },
    { label: 'Documentation', path: '/documentation' },
    { label: 'Live Assist', path: '/live-assist' },
  ];
  
  // Links Prefix
  const enterprisePrefix = '/enterprise';

  // vars
   let radarNewsletter_Desc = "Our exclusive Radar Newsletter is your secret weapon to stay ahead of the competition. Get the latest insights and trends in the online travel industry straight to your inbox. Don't be just another player in the game, be a winner."
  // FOOTER DEFAULT MARGIN (TOP)
  const footerDefaultMargin = '100px';

  return (
    <>
     <div style={{
      width: 'inherit',
      height: 20,
      backgroundColor: '#07399E', 
      borderRadius: '21px 21px 0px 0px',
      marginTop: `${footerDefaultMargin}`
    }}></div>
    <Container bg={'#151515'} size={'100%'} h={'500px'} sx={{position: 'relative', color: 'white'}}>

      <Flex p={50} justify={'space-between'}>
        
        {/* Branding and GeoLocale */}
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
            w={300}
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
        
        {/* Links */}
        <Flex>
        <Grid w={600}>
          <Grid.Col span={3}>
            <Flex direction={'column'} gap={15}>
            <Title ff={'Kumbh Sans'} fw={500} fz={15} c='rgba(255, 255, 255, 0.53)' >Product</Title>
            {enterpriseLinks.slice(0, 6).map((item, index) => (
              <Text key={index} ff={'Kumbh Sans'} fw={600} fz={20} component={Link} to={`${enterprisePrefix}${item.path}`}>
                {item.label}
              </Text>
            ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={15}>
          <Title ff={'Kumbh Sans'} fw={500} fz={15} c='rgba(255, 255, 255, 0.53)' >Company</Title>
              {enterpriseLinks.slice(6, 12).map((item, index) => (
              <Text key={index} ff={'Kumbh Sans'} fw={600} fz={20} component={Link} to={`${enterprisePrefix}${item.path}`}>
                {item.label}
              </Text>
            ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={15}>
          <Title ff={'Kumbh Sans'} fw={500} fz={15} c='rgba(255, 255, 255, 0.53)' >Legal</Title>
              {enterpriseLinks.slice(12, 18).map((item, index) => (
              <Text key={index} ff={'Kumbh Sans'} fw={600} fz={20} component={Link} to={`${enterprisePrefix}${item.path}`}>
                {item.label}
              </Text>
            ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
          <Flex direction={'column'} gap={15}>
          <Title ff={'Kumbh Sans'} fw={500} fz={15} c='rgba(255, 255, 255, 0.53)' >Resources</Title>
          {enterpriseLinks.slice(18, 24).map((item, index) => (
              <Text key={index} ff={'Kumbh Sans'} fw={600} fz={20} component={Link} to={`${enterprisePrefix}${item.path}`}>
                {item.label}
              </Text>
            ))}
            </Flex>
          </Grid.Col>
        </Grid>
        </Flex>

        {/* radarNewsletter */}
        <Flex align={'flex-start'} direction={'column'} gap={20}>
          <Flex justify={'center'} align={'center'}>
            <Flex><IconRadar size={50} color='pink'/></Flex> <Text ff={'Kumbh Sans'} fw={600} fz={30} ml={10}>Radar Newsletter</Text>
          </Flex>
          <Text ff={'Kumbh Sans'} fw={300} fz={16} w={350}>{radarNewsletter_Desc}</Text>
            <Flex>
              <TextInput placeholder={'Enter your email'} w={250} styles={{
                input: {
                  backgroundColor: '#2F2F2F',
                  color: 'white',
                  height: 40,
                  border: '1px solid #151515',
                  borderRadius: 10,
                },
              }}/>
              <Button ml={10} h={38} w={100} sx={{borderRadius: 10}}><IconMailOpened /></Button>

            </Flex>
        </Flex>  

      </Flex>

      {/* Copyright and Social */}
      <Flex justify={'space-between'} m={50} sx={{ borderTop: '1px solid #2F2F2F', paddingTop: '10px' }}>
        <Text>BookingSouq 2023 ©️ All Rights Reserved</Text>
        <Flex gap={20} >
          <IconBrandFacebook />
          <IconBrandTwitter />
          <IconBrandInstagram />
          <IconBrandLinkedin />
        </Flex>
      </Flex>

    </Container>
    </>
  )
}

export default Footer