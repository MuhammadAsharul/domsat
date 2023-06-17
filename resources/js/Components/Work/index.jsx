import React from 'react'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Box, Center, Flex, Text, Image, useColorModeValue, Button } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";

export default function Work() {
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
            px={20}
            pt={5}
            flexDir={'column'}
            align={'center'}
            minH={'100vh'}
            overflowX={'hidden'}
            scrollSnapAlign={'start'}
            scrollBehavior={'smooth'}
        >
            <Flex
                w={'90%'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Text
                    fontSize={'55px'}
                    fontWeight={'bolder'}
                    textTransform={'uppercase'}
                >
                    Our works
                </Text>
                <Text
                    color={'gray.400'}
                >
                    We image and design of the experiences innovate and creative. Just for you
                </Text>
            </Flex>
            <SimpleGrid columns={[2, null, 3]} spacing='40px' w={'90%'}>
                <Flex flexDir={'column'} gap={3}>
                    <Box w={'full'} position={'relative'} borderRadius={'10px'} bg={'facebook.400'} h={'34rem'} bgImg={'https://cdn.discordapp.com/attachments/1108174725689131048/1119113735714390036/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg'}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                    >
                        <Text
                            pos={'absolute'}
                            top={'50%'}
                            w={'full'}
                            textAlign={'center'}
                            color={'white'}
                            fontSize={'3xl'}
                            as='i'
                        >Kayoe</Text>
                    </Box>
                    <Flex flexDir={'column'}>
                        <Text fontWeight={'bold'} fontSize={'xl'} margin={0}>Title</Text>
                        <Text color={'gray.400'}>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit</Text>
                    </Flex>
                </Flex>
                <Flex flexDir={'column'} gap={3}>
                    <Box w={'full'} position={'relative'} borderRadius={'10px'} bg={'facebook.400'} h={'34rem'} bgImg={'https://cdn.discordapp.com/attachments/1108174725689131048/1119107912367865876/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                    >
                        <Text
                            pos={'absolute'}
                            top={'50%'}
                            w={'full'}
                            textAlign={'center'}
                            color={'white'}
                            fontSize={'3xl'}
                        >OLERO HOME</Text>
                    </Box>
                    <Flex flexDir={'column'}>
                        <Text fontWeight={'bold'} fontSize={'xl'} margin={0}>Title</Text>
                        <Text color={'gray.400'}>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit</Text>
                    </Flex>
                </Flex>
                <Flex flexDir={'column'} gap={3}>
                    <Box w={'full'} position={'relative'} borderRadius={'10px'} bg={'facebook.400'} h={'34rem'} bgImg={'https://images.unsplash.com/photo-1609921307735-98bf1617ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                    >
                        <Text
                            pos={'absolute'}
                            top={'50%'}
                            w={'full'}
                            textAlign={'center'}
                            color={'white'}
                            fontSize={'3xl'}
                            fontWeight={'thin'}
                        >CASTROL</Text>
                    </Box>
                    <Flex flexDir={'column'}>
                        <Text fontWeight={'bold'} fontSize={'xl'} margin={0}>Title</Text>
                        <Text color={'gray.400'}>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit</Text>
                    </Flex>
                </Flex>
            </SimpleGrid>
            <Button mt={7} borderRadius="50px" bg={'transparent'} borderWidth="1.5px" borderColor={useColorModeValue('black', 'white')}>See all work →</Button>
            {/* <motion.div
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
            </motion.div> */}
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