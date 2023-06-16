import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
    Image,
    Container,
    chakra,
    Stack,
    Text,
    Button,
    Box,
    Flex,
    VStack,
    useColorModeValue,
    border,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./style.css";

const Header = () => {
    // const refHeader = useRef(null);
    // const inViewHeader = useInView(refHeader);
    // const mainControls = useAnimation()

    // useEffect(() => {
    //     if (inViewHeader) {
    //         mainControls.start('visible')
    //     }
    //     if (!inViewHeader) {
    //         mainControls.start('hidden')
    //     }
    // }, [inViewHeader])
    return (
        <Flex
            width={"full"}
            flexDir={"column"}
            alignItems={"center"}
            minH={"100vh"}
            scrollSnapAlign={"start"}
        >
            <Navbar />
            <VStack
                direction="column"
                spacing={6}
                position={"relative"}
                h={"full"}
            >
                <Flex w={"80%"} position={"relative"} marginBottom={"-5"}>
                    <h1
                        style={{
                            padding: 0,
                            textAlign: "center",
                            fontWeight: "bolder",
                            textTransform: "uppercase",
                            fontSize: "70px",
                            marginTop: "35px",
                            marginBottom: 0,
                        }}
                    >
                        Try us and make yourself stand out different from the
                        crowd
                    </h1>
                    <Text
                        color={"gray.400"}
                        position={"absolute"}
                        bottom={"15px"}
                        left={"15px"}
                        textTransform={"uppercase"}
                        fontWeight={"medium"}
                        textAlign={"left"}
                    >
                        Making your <br></br> brands fly
                    </Text>
                    <Text
                        color={"gray.400"}
                        position={"absolute"}
                        bottom={"15px"}
                        right={"15px"}
                        textTransform={"uppercase"}
                        fontWeight={"medium"}
                        textAlign={"right"}
                    >
                        We believe <br></br> in innovation
                    </Text>
                </Flex>
                <Flex overflow={"hidden"}>
                    <Swiper
                        loop={true}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                        style={{
                            width: "80%",
                        }}
                    >
                        <SwiperSlide style={{ width: "100%" }}>
                            <Flex position={"relative"} cursor={"pointer"}>
                                <Image
                                    src="https://cdn.discordapp.com/attachments/1108174725689131048/1119107912367865876/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
                                    objectFit={"cover"}
                                    objectPosition={"40% 50%"}
                                />
                                <Text
                                    position={"absolute"}
                                    top="25%"
                                    color={"white"}
                                    textAlign={"center"}
                                    fontWeight={"medium"}
                                    textTransform={"uppercase"}
                                    w={"full"}
                                    fontSize={"5xl"}
                                >
                                    {" "}
                                    Web <b>Development</b>
                                </Text>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%" }}>
                            <Flex position={"relative"} cursor={"pointer"}>
                                <Image src="https://images.unsplash.com/photo-1609921307735-98bf1617ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                                <Text
                                    position={"absolute"}
                                    top="25%"
                                    color={"white"}
                                    textAlign={"center"}
                                    fontWeight={"medium"}
                                    textTransform={"uppercase"}
                                    w={"full"}
                                    fontSize={"5xl"}
                                >
                                    {" "}
                                    Mobile <b>Development</b>{" "}
                                </Text>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%" }}>
                            <Flex position={"relative"} cursor={"pointer"}>
                                <Image
                                    src="https://cdn.discordapp.com/attachments/1108174725689131048/1119113735714390036/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg"
                                    objectFit={"cover"}
                                    objectPosition={"50% 0"}
                                />
                                <Text
                                    position={"absolute"}
                                    top="25%"
                                    color={"white"}
                                    textAlign={"center"}
                                    fontWeight={"medium"}
                                    textTransform={"uppercase"}
                                    w={"full"}
                                    fontSize={"5xl"}
                                >
                                    {" "}
                                    UI UX <b>Designer</b>{" "}
                                </Text>
                            </Flex>
                        </SwiperSlide>
                    </Swiper>
                </Flex>
            </VStack>
        </Flex>
    );
};

export default Header;
