import React from 'react'
import { Flex, Grid, Text, Title } from '@mantine/core'

export const HotelType = () => {
  return (
    <>
    <Flex p='20px' direction={'column'}>

        <Flex direction={'column'}>

            <Title>Hotel Type</Title>
            <Text c='dimmed'>Please choose the type of hotel you would like to add</Text>
        </Flex>

        <Flex direction={'column'} mt={30} gap={15}>
            <Grid>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            </Grid>
            <Grid>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            <Grid.Col span={3}>1</Grid.Col>
            </Grid>
        </Flex>

    </Flex>
    </>
  )
}
