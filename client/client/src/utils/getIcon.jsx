import React from 'react';
import { IconAirConditioning, IconBabyBottle,  IconBath,  IconBed, IconBrandSupernova, IconBus, IconCampfire, IconCheck, IconChevronRight, IconClothesRack, IconCoffee, IconCornerDownRight, IconEgg, IconFence, IconFlower, IconGeometry, IconGlassFull, IconHeart, IconHome2, IconHomeCancel, IconIroning1, IconMapPin, IconMapPins, IconPlane, IconPlaneArrival, IconPlant, IconPool, IconRulerMeasure, IconSmoking, IconSmokingNo, IconSpace, IconStar, IconSteeringWheel, IconTable, IconToolsKitchen, IconWalk, IconWash, IconWashMachine, IconWifi, IconWindow } from '@tabler/icons'

export const getIcon = (facility) => {
  switch (facility) {
    case 'Air Conditioning':
      return <IconAirConditioning />;
    case 'Airport Shuttle':
      return <IconPlaneArrival />;
    case 'Balcony':
      return <IconWindow />;
    case 'Bath':
      return <IconBath />;
    case 'Breakfast':
      return <IconCoffee />;
    case 'City View':
      return <IconMapPins />;
    case 'Clothes Rack':
      return <IconClothesRack />;
    case 'Coffee Machine':
      return <IconCoffee />;
    case 'Dining Area':
      return <IconTable />;
    case 'Dining Table':
      return <IconTable />;
    case 'Dishwasher':
      return <IconWash />;
    case 'Free Wifi':
      return <IconWifi />;
    case 'Bar':
      return <IconGlassFull />;
    case 'Sauna':
      return <IconCampfire />;
    case 'Garden':
      return <IconFlower />;
    case 'Terrace':
      return <IconFence />;
    case 'No Smoking Rooms':
      return <IconSmokingNo />;
    case 'Family Rooms':
      return <IconBabyBottle />;
    case 'Hot Tub':
      return <IconBath/>;

    default:
      return <IconCheck />; // Return a default icon or handle unknown facilities accordingly
  }
};
