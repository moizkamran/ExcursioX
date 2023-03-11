import { Group, Input, TextInput, Title, Tooltip, Text, Radio} from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
import React from 'react'

export const PropertyDetails = () => {
  
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

        <div>

        <div style={{ display : 'flex', flexDirection: 'column'}}>
            <Title>Details</Title>
            <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Property Name</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Property Contact Person Name</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Contact Number</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
        <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 10}}>

                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Is it company owned?</Text>
                <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
        
        </div>
        <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 20, marginTop: 10}}> 
        <Radio
      label="Yes"
      color="dark"
      value="yes"
    />
    <Radio
      label="No"
      color="dark"
      value="no"
    />
        </div>
      </div>
      <div style={{marginTop: 10}}>
        <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 10}}>

                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Do you use a channel manager?</Text>
                <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
        
        </div>
        <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 20, marginTop: 10}}> 
        <Radio
      label="Yes"
      color="dark"
      value="yes"
    />
    <Radio
      label="No"
      color="dark"
      value="no"
    />
        </div>
      </div>

        </div>
        
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column'}}>
            <Title>Property Address</Title>
            <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Street Address</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Address Line 2</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>

      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Country</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>

      </div>

        </div>
        
      </div>

      

    </div>
  )
}

export default PropertyDetails