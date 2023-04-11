import { Flex, Group, Image, Text, useMantineTheme, rem, TextInput, Button } from '@mantine/core'
import { IconArrowRight, IconPhoto, IconSend, IconUpload, IconX } from '@tabler/icons'
import { motion as m } from 'framer-motion'

import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import PhotosComponent from '../../../Hotel & Property/AddProperty/components/Functions/PhotosComponent';

const Branding = (props) => {
  const theme = useMantineTheme();
  return (
    <m.div
    style={{position: 'absolute', width: '65%', height: '70%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
      <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={10}>Almost Done, Branding</Text>
      <Text fz={18} ff={'Kumbh Sans'} fw={400} w={500}>These will appear on all of your receipts, itinerary, 
accommodation booking, simple bookings, quick bookings, 
vouchers, invoices and complete CRM branding</Text>

<Flex>
  <Flex gap={20} direction={'column'}>

      {/* ENTERPRISE EMP DETAILS */}
        <Flex direction={'column'} gap={20} mt={20}>
          {/* ENTERPRISE SIZE */}
          <Flex direction={'column'} gap={10}>
              <Text fz={25} ff={'Kumbh Sans'} fw={500}>Logo</Text>
              <Flex gap={20} w={450}>
              <LogoUpload  theme={theme} IMAGE_MIME_TYPE={IMAGE_MIME_TYPE} props={props} rem={rem}  />
              <LogoUpload  theme={theme} IMAGE_MIME_TYPE={IMAGE_MIME_TYPE} props={props} rem={rem}  />
              </Flex>
              <Flex gap={20}>
                <Flex gap={5} direction={'column'}>
                  <Email heading={'Company Name'} placeholder={""}/>
                  <Email heading={'Company Moto'} placeholder={""}/>
                  <Email heading={'Company Address'} placeholder={""}/>
                </Flex>
                <Flex gap={5} direction={'column'}>
                  <Email heading={'Company Phone'} placeholder={""}/>
                  <Email heading={'How did you hear about us?'} placeholder={""}/>
                </Flex>
              </Flex>

          </Flex>
        </Flex>
      
  </Flex>
  <Flex direction={'column'} gap={20}>
   <Flex bg={'#222323'} h={300} w={700} sx={{borderRadius: 20}}>
    <Flex >
      <Text align={'center'} justify={'center'} c={'white'}>ENSURE THE FOLLOWING</Text>
    </Flex>
   </Flex>
  </Flex>
</Flex>

    </m.div>
  )
}


    function LogoUpload({theme, IMAGE_MIME_TYPE, props, rem}) {
      return (<Dropzone onDrop={files => console.log('accepted files', files)} onReject={files => console.log('rejected files', files)} maxSize={3 * 1024 ** 2} accept={IMAGE_MIME_TYPE} {...props}>
      <Group position="center" spacing="xl" style={{
    minHeight: rem(220),
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
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>);
    }

    function Email({placeholder, heading}) {
      return (<Flex gap={20}direction={'column'}> 
        <Text fz={15} ff={'Kumbh Sans'} fw={500}>{heading}</Text>
        <TextInput placeholder={placeholder} w={250} mt={-15}styles={{
    input: {
      height: 30,
      border: '1px solid #D0D5DD',
      borderRadius: 10,
      boxShadow: '0px 1.14159px 2.28317px rgba(16, 24, 40, 0.05)'
    }
    }} />
        </Flex>);
    }

  export default Branding