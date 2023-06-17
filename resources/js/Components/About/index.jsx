import React from 'react'
import { Flex, HStack, Box, Text, Image, Button, useColorModeValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

export default function About() {
    return (
        <Flex
            pt={5}
            flexDir={'column'}
            align={'center'}
            minH={'100vh'}
            overflowX={'hidden'}
            scrollSnapAlign={'start'}
            scrollBehavior={'smooth'}
        >
            <HStack
                w={'90%'}
                px={{ base:5, lg:20}}
                alignItems={'start'}
                mb={16}
            >
                <Text
                    w={'40%'}
                    mt={'-3'}
                    fontSize={'55px'}
                    fontWeight={'bolder'}
                    textTransform={'uppercase'}
                >
                    About
                </Text>
                <Flex flexDir={'column'} justifyContent={'start'}>
                    <Text
                        color={'gray.400'}
                    >
                        We image and design of the experiences innovate and creative. Just for you Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, necessitatibus!
                    </Text>
                    <Button w={'150px'} mt={10} borderRadius="50px" bg={'transparent'} borderWidth="1.5px" borderColor={useColorModeValue('black', 'white')}>
                        ABOUT US ↘
                    </Button>
                </Flex>
            </HStack>
            <Flex w={'full'} justifyContent={'end'}>
                <Box w={'90%'}>
                    <Swiper
                        loop={true}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                          }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        style={{
                            width: '100%',
                        }}
                    >
                    <SwiperSlide style={{ width: '80%' }}>
                                <Flex position={'relative'} cursor={'pointer'} w={'full'}>
                                    <Image 
                                        src="https://cdn.discordapp.com/attachments/1108174725689131048/1119107912367865876/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
                                        borderRadius={'15px'}/>
                                    <Text 
                                        position={'absolute'}
                                        top="25%"
                                        color={'white'}
                                        textAlign={'center'}
                                        fontWeight={'medium'} 
                                        textTransform={'uppercase'}
                                        w={'full'}
                                        fontSize={'5xl'}
                                    > Web <b>Development</b></Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '80%' }} >
                                <Flex position={'relative'} cursor={'pointer'}>
                                    <Image 
                                        src="https://images.unsplash.com/photo-1609921307735-98bf1617ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                                    <Text 
                                        position={'absolute'}
                                        top="25%"
                                        color={'white'}
                                        textAlign={'center'}
                                        fontWeight={'medium'} 
                                        textTransform={'uppercase'}
                                        w={'full'}
                                        fontSize={'5xl'}
                                    > Mobile <b>Development</b> </Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '80%' }} >
                                <Flex position={'relative'} cursor={'pointer'}>
                                    <Image 
                                        src="https://cdn.discordapp.com/attachments/1108174725689131048/1119113735714390036/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg"
                                        objectFit={"cover"}
                                        objectPosition={"50% 0"}
                                    />
                                    <Text 
                                        position={'absolute'}
                                        top="25%"
                                        color={'white'}
                                        textAlign={'center'}
                                        fontWeight={'medium'} 
                                        textTransform={'uppercase'}
                                        w={'full'}
                                        fontSize={'5xl'}
                                    > UI UX <b>Designer</b> </Text>
                                </Flex>
                            </SwiperSlide>
                    </Swiper>
                </Box>
            </Flex>
        </Flex>
    )
}
