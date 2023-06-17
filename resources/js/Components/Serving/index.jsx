import React from 'react'
import { Box,Flex, HStack, Text, Image, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'

export default function Serving() {
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
                    w={'45%'}
                    fontSize={'55px'}
                    fontWeight={'bolder'}
                    textTransform={'uppercase'}
                    lineHeight={'shorter'}
                >
                    what we're <br /> serving
                </Text>
                <Text
                    color={'gray.400'}
                >
                    We imagine and design of the experiences innovate and creative. Just for you.
                </Text>
            </Flex>
            <Flex w={'90%'} mt={8}>
                <HStack spacing={'32'} align={'start'}>
                    <Image 
                        src="https://cdn.discordapp.com/attachments/1108174725689131048/1119506581718040626/altumcode-fPPwHFn6Eis-unsplash.jpg"
                        borderRadius={'10px'} 
                        w={'30%'}
                        h={'37.5rem'}
                        p={0}
                    />
                    <Flex flexDir={'column'} align={'start'}>
                         <Flex pb={8} align={'center'} borderBottom={'1px'} borderColor={'gray.400'}>
                            <VStack align={'start'}>
                                <Text fontSize='3xl' color={useColorModeValue('black', 'white')} textTransform={'uppercase'} fontWeight={'semibold'}>Heroes</Text>
                                <Text
                                    color={'gray.400'}
                                >
                                    We image and design of the experiences innovate and creative. Just for you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, tempore!
                                </Text>
                            </VStack>
                            <Text fontSize={'3xl'} color={'gray.400'}>↘</Text>
                        </Flex>
                         <Flex py={8} align={'center'} borderBottom={'1px'} borderColor={'gray.400'}>
                            <VStack align={'start'}>
                                <Text fontSize='3xl' color={useColorModeValue('black', 'white')} textTransform={'uppercase'} fontWeight={'semibold'}>Heroes</Text>
                                <Text
                                    color={'gray.400'}
                                >
                                    We image and design of the experiences innovate and creative. Just for you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, tempore!
                                </Text>
                            </VStack>
                            <Text fontSize={'3xl'} color={'gray.400'}>↘</Text>
                        </Flex>
                         <Flex py={8} align={'center'} borderBottom={'1px'} borderColor={'gray.400'}>
                            <VStack align={'start'}>
                                <Text fontSize='3xl' color={useColorModeValue('black', 'white')} textTransform={'uppercase'} fontWeight={'semibold'}>Heroes</Text>
                                <Text
                                    color={'gray.400'}
                                >
                                    We image and design of the experiences innovate and creative. Just for you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, tempore!
                                </Text>
                            </VStack>
                            <Text fontSize={'3xl'} color={'gray.400'}>↘</Text>
                        </Flex>
                         <Flex py={8} align={'center'}>
                            <VStack align={'start'}>
                                <Text fontSize='3xl' color={useColorModeValue('black', 'white')} textTransform={'uppercase'} fontWeight={'semibold'}>Heroes</Text>
                                <Text
                                    color={'gray.400'}
                                >
                                    We image and design of the experiences innovate and creative. Just for you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, tempore!
                                </Text>
                            </VStack>
                            <Text fontSize={'3xl'} color={'gray.400'}>↘</Text>
                        </Flex>
                    </Flex>
                </HStack>
            </Flex>
        </Flex>
    )
}
