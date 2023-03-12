import { Group, Input, TextInput, Title, Tooltip, Text, Radio, Flex, Button, Container, ActionIcon} from '@mantine/core'
import { IconAlertCircle, IconArrowBadgeLeft, IconArrowBadgeRight, IconQuestionCircle, IconSearch, IconMoon, IconArrowLeft, IconArrowRight } from '@tabler/icons'
import React from 'react'

export const PropertyDetails = ({ onButtonClick, onBackClick }) => {
  
  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: 'space-between', padding: 20}}>

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
      <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>

      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Country</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 150, marginTop: 10 }}
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
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Country</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 150, marginTop: 10 }}
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
        <div style={{backgroundColor: '#FFFFFF', height: 150, width: 400, borderRadius: 20, marginTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, border: '2px dashed #07399E'}}>
  <div>
    <div style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: '#F0F0F0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span style={{fontSize: '50px', fontWeight: 'bold', fontFamily: 'Fredoka'}}>!</span>
    </div>
  </div>
  <div style={{display: 'flex'}}>
    <div style={{display: 'flex', flexDirection: 'column', width: 'inherit', marginLeft: 10}}>
      <Text style={{fontSize: '24px'}}>We care about you!</Text>
      <Text fz="sm">Please make sure that everything that you are entering is to the best of your knowledge, as this will help avoid any errors in the future.</Text>
    </div>
  </div>
</div>

      
      </div>

      <div style={{display: 'flex'}}>

        <div style={{ display : 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'column',width: '300px', height: 'auto', backgroundColor: '#07399E', borderRadius: 35, color: 'white', padding: 45 }}>
            <Text style={{fontSize: 25}}>Step 1 out of 5</Text> 
            
              <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
              <IconSearch size={100} color={'#00194B'}/>
              <Text align='center' style={{ marginTop: 30 }}>Let’s get to know a bit more about this amazing property of yours so that we can understand what we are working with</Text>
              <Button style={{backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 30}} leftIcon={<IconQuestionCircle/>}>Need Help?</Button>

              </div>

          </div>
            
        </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20}}>
      <ActionIcon onClick={onBackClick} radius="xl" variant="filled" style={{backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10}}>
      <IconArrowLeft size="1.5rem" />
    </ActionIcon>
        <Button onClick={onButtonClick} rightIcon={<IconArrowRight/>} style={{backgroundColor: '#07399E', height: '50px', width: '200px'}}>Next Step</Button>
      </div>
      
    </div>
      </>
  )
}

export default PropertyDetails