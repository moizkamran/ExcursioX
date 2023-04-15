import { Flex, Group, Image, Text, useMantineTheme, rem, TextInput, Button, ThemeIcon, NativeSelect, Progress, RingProgress, Avatar } from '@mantine/core'
import { IconArrowRight, IconCheck, IconEdit, IconPhoto, IconSend, IconTrash, IconUpload, IconUserPlus, IconX } from '@tabler/icons'
import { motion as m } from 'framer-motion'

import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const Agents = (props) => {
  const theme = useMantineTheme();
  return (
    <m.div
    style={{position: 'absolute', width: '65%', height: '70%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
        <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={10}>Last Step, Agents</Text>
        <Flex gap={50}>
        <Flex>
            <Flex bg={'#F8F8F8'} p={15} sx={{borderRadius: 16, boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)'}} direction={'column'}>
                <Text fz={20} ff={'Kumbh Sans'} fw={700} mb={10}>ROLE</Text>
                <Flex gap={20} >
                    <Flex direction={'column'} gap={10}>
                     <Inputss placeholder={''} heading={'Full Name'} />
                     <Inputss placeholder={'Role'} heading={'Job Title'} />
                     <Inputss placeholder={''} heading={'Email'} />
                    </Flex>
                    <Flex direction={'column'} gap={10} >
                    <Inputss placeholder={'Shares/Salaried'} heading={'Employement Type'} />
                    <Inputss placeholder={'8%'} heading={'Ownership %'} />
                    <Text fz={15} ff={'Kumbh Sans'} fw={500}>Role in CRM</Text>
                    <NativeSelect placeholder={'Select'} w={250} mt={-5} 
                    data={["Admin", "Agent", "Manager", "Owner", "Sales", "Support"]}
                    styles={{
                          input: {
                            height: 30,
                            border: '1px solid #D0D5DD',
                            borderRadius: 10,
                            boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
                          }
                          }}/>
                    </Flex>
                </Flex>
                    <Flex direction={'column'} mt={20}>
                    <Text fz={20} ff={'Kumbh Sans'} fw={700} mb={10}>IDENTIFICATION</Text>
                      <Flex w={'100%'}>
                        <LogoUpload  theme={theme} IMAGE_MIME_TYPE={IMAGE_MIME_TYPE} props={props} rem={rem}  />
                        <RingProgress
        size={170}
        thickness={16}
        label={
          <Text size="md" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            2 Left in your plan
          </Text>
        }
        sections={[
          { value: 80, color: '#07399E', tooltip: 'Management' },
        ]}
      />
                      </Flex>
                      <Flex align={'flex-end'} justify={'flex-end'} >

                      <Button   mt={20} w={250} color={'white'} sx={{borderRadius: 10}} rightIcon={<IconUserPlus size={20} />}>Invite Employee</Button>
                      </Flex>
                    </Flex>
            </Flex>
        </Flex>
          <Flex mt={20} gap={20} direction={'column'}>.
              <Text fz={20} ff={'Kumbh Sans'} fw={700} mb={10}>Your Employees</Text>              
              <NeedsModule description="Abdul Moeez" img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              role="Developer"/>
              <NeedsModule description="Kamran Arif" img="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              role="Travel Agent"/>
          </Flex>
        </Flex>
    </m.div>
  )
}

function Inputss({placeholder, heading}) {
    return (<Flex gap={20}direction={'column'}> 
      <Text fz={15} ff={'Kumbh Sans'} fw={500}>{heading}</Text>
      <TextInput placeholder={placeholder} w={250} mt={-15} styles={{
  input: {
    height: 30,
    border: '1px solid #D0D5DD',
    borderRadius: 10,
    boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
  }
  }} />
      </Flex>);
  }
  
  function LogoUpload({theme, IMAGE_MIME_TYPE, props, rem}) {
    return (<Dropzone onDrop={files => console.log('accepted files', files)} onReject={files => console.log('rejected files', files)} maxSize={3 * 1024 ** 2} accept={IMAGE_MIME_TYPE} {...props}>
    <Group position="center" spacing="xl" style={{
  minHeight: rem(160),
  pointerEvents: 'none',
}}>
      <Dropzone.Accept>
        <IconUpload size="3.2rem" stroke={1.5} color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]} />
      </Dropzone.Accept>
      <Dropzone.Reject>
        <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]} />
      </Dropzone.Reject>
      <Dropzone.Idle>
        <IconPhoto size="3.2rem" stroke={1.5} />
      </Dropzone.Idle>

      <div>
        <Text size="xl" inline>
          Upload your ID Card or Passport
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
          Attach both sides, each file should not exceed 5mb
        </Text>
      </div>
    </Group>
  </Dropzone>);
  }

  function NeedsModule({role ,description, icon, img}) {
    return (<Flex w={400} h={40} justify={'flex-start'} gap={20} align={'center'} bg={'#F8F8F8'} p={25} pos={'relative'} sx={{
  boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
  borderRadius: 15,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
  backgroundColor: '#222323',
  transform: 'scale(1.09)',
  color: 'white',
  },
  }}>
        {img? (<Avatar size="lg" radius="xl" src={img}/> ) : ''}{icon} 
        <Flex direction={'column'}>
        <Text fz={21}>{description}</Text>
        <Text fz={19} opacity={"50%"}>{role}</Text>
        </Flex>
        <Flex pos={'absolute'} gap={20} right={20}>
        <IconEdit size={20} />
        <IconTrash size={20} color='red'/>
        </Flex>
      </Flex>
      
      );
  }

export default Agents