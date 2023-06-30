import { Center, Flex, Text, TextInput, Title } from "@mantine/core"
import lottie from 'lottie-web';
import SpaceViewLoading from '../../../../assets/lottie/SpaceViewLoading.json'
import { useEffect, useRef, useState } from "react";


const SpaceView_render = () => {
        
        const loading = true


    return (
        <>
                <Flex mt={20} miw={1200} mih={600} bg={'#EEEEEE'} sx={{borderRadius: 45}} align={loading ? 'center' : undefined} justify={loading ? 'center' : undefined}>
                        
                        {loading ? <Flex direction={'column'} align={'center'}>
                            <LoadingAni />
                            <Title size={20}>Building your property...</Title>
                            <Text c='dimmed'>Hold on we are fetching your amazing property</Text>
                        </Flex> : null }
    
                </Flex>
        </>
    )
}

// Loading Animation for SpaceView when loading

const LoadingAni = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      if (containerRef.current) {
        lottie.loadAnimation({
          container: containerRef.current,
          animationData: SpaceViewLoading,
          loop: true,
          autoplay: true,
        });
      }
    }, []);
  
    return <div style={{ width: '250px' }} ref={containerRef}></div>;
  };

export default SpaceView_render