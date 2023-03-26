import React from 'react'
import { Button, Flex, Grid, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import styles from './propertyCustomStyles.module.css'


export const PropertyTypeOf = () => {

    const data = [
        { title: 'Hotel', text: 'Accommodations for travelers often with restaurants, meeting rooms and other guest services' },
        { title: 'Guest House', text: 'Private home with separate living facilities for host and guest' },
        { title: 'Bed & Breakfast', text: 'Private home offering overnight stays and breakfast' },
        { title: 'Homestay', text: 'A shared home where the guest has a private room and the host lives and is on site.' },
        { title: 'Hostel', text: 'Budget accommodations with mostly dorm-style beds and social atmosphere' },
        { title: 'Condo Hotel', text: 'Independent apartments with some hotel facilities like a front desk' },
        { title: 'Capsule Hotel', text: 'Extremely small units or capsules offering cheap and basic overnight accommodations' },
        { title: 'Farm Stay', text: 'Private farm with simple accommodations' }
      ];
      
      const gridBoxes = data.map(item => (
        <GridBox key={item.title} title={item.title} text={item.text} />
      ));

  return (
    <>
      <Flex p='20px' direction={'column'}>
        <Flex direction={'column'} mt={30} gap={15}>
            <Grid lg={50}>
                {gridBoxes.slice(0, 4)}
            </Grid>
            <Grid lg={50}>
                {gridBoxes.slice(4)}
            <Button style={{width: '200px'}}><IconChevronDown/></Button>
            </Grid>
        </Flex>
      </Flex>
    </>
  )
}

export default PropertyTypeOf

const GridBox = ({ title, text }) => {
  return (
    <Grid.Col span={3}>
      <Flex direction={'column'} className={styles.gridBox}>
        <Title fz={25} fw={500}>{title}</Title>
        <Text fz={16}>{text}</Text>
      </Flex>
    </Grid.Col>
  );
}