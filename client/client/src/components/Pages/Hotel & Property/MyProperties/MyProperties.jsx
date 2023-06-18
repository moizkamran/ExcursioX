import React from 'react'

import {
  Flex,
  Text,
  Title,
} from "@mantine/core";
import { IconBuildingBank } from '@tabler/icons';
import PropertyCard from '../../../PropertyCard/PropertyCard';

const MyProperties = () => {
  return (
    <>
    <Flex gap={10} align={'center'} justify={'center'}><IconBuildingBank size={50}/><Title>Your Properties</Title></Flex>
    <Flex direction={'column'}> 
      <Text ff={'Kumbh Sans'}>Showing 15 out of 102 Properties</Text>
        <Flex>
          <PropertyCard/>
        </Flex>
    </Flex>
    </>
  )
}

export default MyProperties