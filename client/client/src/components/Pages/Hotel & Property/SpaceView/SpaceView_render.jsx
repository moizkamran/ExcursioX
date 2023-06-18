import { Center, Flex, Text, Title } from "@mantine/core"


const SpaceView_render = () => {
        
        const loading = true

    return (
        <>
                <Flex mt={20} miw={1200} mih={600} bg={'#EEEEEE'} sx={{borderRadius: 45}} align={loading ? 'center' : undefined} justify={loading ? 'center' : undefined}>
                        
                        {loading ? <Flex direction={'column'} align={'center'}>
                            <Title size={20}>Building your property...</Title>
                            <Text c='dimmed'>Hold on we are fetching your amazing property</Text>
                        </Flex> : null }

                </Flex>
        </>
    )
}

export default SpaceView_render