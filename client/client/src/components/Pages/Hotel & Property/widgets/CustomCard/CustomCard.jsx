import React from 'react';
import { Text } from '@mantine/core';

const CustomCard = ({ heading, icon, children }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{backgroundColor: '#07399E', width: 'inherit', height: 'max-content', borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 5}}>
        <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5, marginLeft: 10}}>
          {icon}
          <Text style={{fontSize: 20, color:'white' }}>{heading}</Text>
        </div>
      </div>
      <div style={{backgroundColor: '#F3F3F3', width: 'inherit', height: 'max-content', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, padding: 15 }}> 
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
