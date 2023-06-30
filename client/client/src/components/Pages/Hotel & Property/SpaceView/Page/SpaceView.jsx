import { Flex, Image, Text, Title } from "@mantine/core"
import SpaceView_render from "../SpaceView_render"

import SpaceViewLogo from '../../../../../assets/SpaceViewLogo.svg'

const SpaceView = () => {
  return (
    <>
     <Flex p={20}>
        <Flex direction={'column'}>
            <Text c="dimmed">Home {'>'} Hotel {'>'} SpaceView</Text> 
            <Title mt={10}>Building Property View</Title> 
                <Flex>
                    {/* Main Rendering */}
                    <SpaceView_render />
                
                        {/* Side Bar */}
                        <Flex direction={'column'} ml={20} w={'max-content'}>
                            <Image src={SpaceViewLogo} width={300} />
                        </Flex>
                </Flex>
            </Flex>
     </Flex>
    </>
  )
}

export default SpaceView