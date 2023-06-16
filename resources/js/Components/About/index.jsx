import React from 'react'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Marquee from "react-fast-marquee";

export default function About() {
    const refAbout = useRef(null);
    const inViewAbout = useInView(refAbout);
    const mainControlsAbout = useAnimation()

    useEffect(() => {
        if (inViewAbout) {
            mainControlsAbout.start('visible')
        }
        if (!inViewAbout) {
            mainControlsAbout.start('hidden')
        }
    }, [inViewAbout])


    return (
        <Flex
            id='about'
            flexDir={'column'}
            align={'center'}
            justifyContent={'center'}
            minH={'100vh'}
            position={'relative'}
            overflowX={'hidden'}
            scrollSnapAlign={'start'}
            scrollBehavior={'smooth'}
            >
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial='hidden'
                animate={mainControlsAbout}
                transition={{ duration: 1 }}
            >
                <Text
                    ref={refAbout}
                    fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
                    fontWeight={'extrabold'}
                >
                    About Us
                </Text>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -900 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial='hidden'
                animate={mainControlsAbout}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <Flex flexDir={'column'} align={'center'} >
                    <Text
                        textAlign={'center'}
                        w={{ sm: '90%', md: '50%' }}
                        p={{ base: 5, md: 0 }}
                        fontSize={{ base: "md", sm: "lg", md: "xl", lg: "3xl" }}
                    >
                        We are building a technology-based ecosystem that enables inclusive access to quality
                        learning content for teachers, supports data-driven decision-making in schools, and strengthens
                        collaboration between Universities, Industry Partners, & Graduates.
                    </Text>
                </Flex>
            </motion.div>
        </Flex>
    )
}

{/* <Flex
                w={'104%'}
                scrollSnapAlign={'start'}
                position={'absolute'}   
                transform="rotate(5deg) translateY(100px)"
                bg="#ff6700" 
                top={0}
                border={'1px'}
                mx={9}
                py={5}
                color={'black'}
            >
                <Marquee gradient={false} speed={70}>
                        {[...new Array(10)]
                            .map(
                                () => (
                                    <Text
                                        textTransform={'uppercase'}
                                        whiteSpace={'nowrap'}
                                        display={'inline'}
                                        fontSize={'2xl'}
                                        fontWeight={'bold'}
                                        px={'3rem'}
                                    >
                                        Domsattt
                                    </Text>
                                ))}
                </Marquee>
            </Flex>
            <Flex
                w={'104%'}
                position={'absolute'}   
                transform="rotate(-7deg) translateY(100px)"
                bg="#ff6700" 
                top={0}
                border={'1px'}
                color={'black'}
                mx={9}
                py={5}
            >
                <Marquee gradient={false} speed={60}>
                        {[...new Array(10)]
                            .map(
                                () => (
                                    <Text
                                        textTransform={'uppercase'}
                                        whiteSpace={'nowrap'}
                                        display={'inline'}
                                        fontSize={'2xl'}
                                        fontWeight={'bold'}
                                        px={'3rem'}
                                    >
                                        Domsattt
                                    </Text>
                                ))}
                </Marquee>
            </Flex> */}