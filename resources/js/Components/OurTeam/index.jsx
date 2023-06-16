import React from 'react'
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper';
import { Flex, Text, Avatar, useColorModeValue, Box } from '@chakra-ui/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';


export default function OurTeam() {
    const refMember = useRef(null);
    const inViewMember = useInView(refMember);
    const mainControlsMember = useAnimation()
    
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (inViewMember) {
            mainControlsMember.start('visible')
        }
        if (!inViewMember) {
            mainControlsMember.start('hidden')
        }
    }, [inViewMember])

    const members = [
        {name: 'Ghozy', divisi: 'Front End', img:'https://bit.ly/dan-abramov'},
        {name: 'Arul', divisi: 'Back End', img:'https://bit.ly/kent-c-dodds'},
        {name: 'Aga', divisi: 'UI/UX Designer', img:'https://bit.ly/ryan-florence'},
        {name: 'Anas', divisi: 'Software Engineer', img:'https://bit.ly/code-beast'},
        {name: 'Febry', divisi: 'Front End', img:'https://bit.ly/sage-adebayo'},
        {name: 'Ghasa', divisi: 'Front End', img:'https://bit.ly/prosper-baba'},
        {name: 'Seno', divisi: 'Quality Asurance', img:'https://bit.ly/code-beast'},
        {name: 'Yanda', divisi: 'Back End', img:'https://bit.ly/dan-abramov'},
        {name: 'Edy', divisi: 'Software Engineer', img:'https://bit.ly/kent-c-dodds'},
    ]

    // useEffect(() => {
    //     const box = document.getElementById('avatar');
    //     const boxWidth = box.offsetWidth;
    //     const boxHeight = box.offsetHeight;
    
    //     const moveObject = () => {
    //       const randomTop = Math.random() * (boxHeight - 50);
    //       const randomLeft = Math.random() * (boxWidth - 50);
    //       setPosition({ top: randomTop, left: randomLeft });
    //     };
    
    //     const interval = setInterval(moveObject, 2000);
    
    //     return () => clearInterval(interval);
    //   }, []);

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControlsMember}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <Flex 
                    w={'full'}
                    flexDir={'column'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    minH={'100vh'}
                    position={'relative'}
                    scrollSnapAlign={'start'}
                >
                    <Text
                        ref={refMember}
                        fontSize={{ base: "4xl", sm: "5xl" , md: "6xl", lg: "7xl" }}
                        fontWeight={'bold'}
                    >
                        Our Team
                    </Text>
                    <Swiper
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                            // el:'.swiper-pagination',
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                        className="swiper_container"
                    >
                        {members.map((member, i) => (
                                    <SwiperSlide key={i}>
                                        <Flex
                                            pt={10}
                                            flexDir={'column'}
                                            align={'center'}
                                            height={'full'}
                                            borderRadius={'2rem'}
                                            // border={'1px '}
                                            bg={'white'}
                                            color={'black'}
                                            // bg={useColorModeValue('#000', '#fff')}
                                            // color={useColorModeValue('#fff', '#000')}
                                            // borderColor={useColorModeValue('#000', '#fff')}
                                            boxShadow={useColorModeValue('dark-lg', 'lg')}
                                            gap={7}
                                        >
                                            <Text fontWeight={'black'} >
                                                {member.divisi}
                                            </Text>
                                            <Flex
                                                flexDir={'column'}
                                                align={'center'}
                                                gap={2}
                                            >
                                                <Avatar size='xl' name='Christian Nwamba' src={member.img} />
                                                <Text fontWeight={'black'}>
                                                    {member.name}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </SwiperSlide>
                                )
                            )
                        }
                    </Swiper>
                    {/* <Avatar 
                        id={'avatar'}
                        size='xl' 
                        position="absolute"
                        top={position.top}
                        left={position.left} 
                        name='Christian Nwamba' 
                        src={members[0].img} /> */}
                </Flex>
            </motion.div>
        </>
    )
}

{/* <Flex className='swiper-pagination' position={'relative'} bg={useColorModeValue('gray.200', 'whiteAlpha.400')}></Flex> */}