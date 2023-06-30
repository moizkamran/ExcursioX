import { Flex, Progress, Text, Title } from '@mantine/core'


const LiveStatus = ({count, title, color}) => {
    return (
        <>
                <Flex direction={'column'} bg={'#060028'} sx={{borderRadius: 25, color: 'white'}} p={20} w={'max-content'}>
                        <Flex direction={'column'} align={'center'}>
                                <Title size={45}>{count}</Title>
                                <Text>{title}</Text>
                        </Flex>
                        <Progress value={100} size={10} color={`${color}`} mt={10}/>
                </Flex>
        </>
    )
}

export default LiveStatus