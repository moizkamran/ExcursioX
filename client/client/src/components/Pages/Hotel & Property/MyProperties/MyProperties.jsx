import React, { useEffect, useState } from 'react';
import { Flex, LoadingOverlay, Text, Title } from '@mantine/core';
import { IconBuildingBank } from '@tabler/icons';
import PropertyCard from '../../../PropertyCard/PropertyCard';
import newRequest from '../../../../utils/newRequest';

const MyProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
    const fetchProperties = async () => {
      const res = await newRequest.get('/property/all');
      const data = await res.data;
      // add a fake delay to show the loading overlay
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      setProperties(data);
    }; 
    fetchProperties(); } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Flex gap={10} align={'center'} justify={'center'}>
        <IconBuildingBank size={50} />
        <Title>Your Properties</Title>
      </Flex>
      <Flex direction={'column'}>
        <Text ff={'Kumbh Sans'}>{`Showing ${properties.length} out of 102 Properties`}</Text>
      <LoadingOverlay visible={loading} overlayBlur={2} transitionDuration={200} exitTransitionDuration={300}/>
        <Flex direction={'column'} gap={20}>
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              heroImage={property.propertyPhotos[0].photoUrl}
              propertyTitle={property.propertyName}
              propertyRating={property.rating}
              propertyCity={property.propertyCity}
              propertyCountry={property.propertyCountry}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default MyProperties;
