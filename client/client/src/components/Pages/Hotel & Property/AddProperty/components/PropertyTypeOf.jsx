import React, { useState } from 'react'
import { Button, Flex, Grid, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import styles from './propertyCustomStyles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatePropertyDetails } from '../../../../../Redux/Slicers/propertySlice'


export const PropertyTypeOf = () => {
  const { propertyDetails } = useSelector((state) => state.property);
  const selectedItem = useSelector(() => propertyDetails.propertyTypeOf);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = (title) => {
    setSelectedTitle(title);
    dispatch(
      updatePropertyDetails({propertyTypeOf: title})
    );
  };

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
    <GridBox key={item.title} title={item.title} text={item.text} isSelected={selectedTitle === item.title} onSelect={handleSelect} />
  ));

return (
  <>
    <Flex p='20px' direction={'column'}>
      <Flex direction={'column'} mt={30} gap={15}>
          <Grid>
              {gridBoxes.slice(0, 4)}
          </Grid>
          <Grid>
              {gridBoxes.slice(4)}
          <Button style={{width: '200px'}}><IconChevronDown/></Button>
          </Grid>
      </Flex>
    </Flex>
  </>
)
}

export default PropertyTypeOf

const GridBox = ({ title, text, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <Grid.Col span={3}>
      <Flex direction={'column'} className={`${styles.gridBox} ${isSelected ? styles.selected : ''}`} onClick={handleClick}>
        <Title fz={25} fw={500}>{title}</Title>
        <Text fz={16}>{text}</Text>
      </Flex>
    </Grid.Col>
  );
};

