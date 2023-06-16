import "@fontsource/poppins/400.css";
import "@fontsource/open-sans/700.css";

import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

import React from "react";
import Header from "../Components/Header";
import About  from "../Components/About";
import OurTeam from "../Components/OurTeam";

export default function Home(props) {

    return (
        <Flex 
            flexDir={'column'} 
            bg={useColorModeValue('white', '#000')}
            overflowY={'scroll'} 
            scrollSnapType="y mandatory"
            scrollBehavior={'smooth'}
            height={'100vh'}
            transition="all 2s"
        >
            <Header />
            <About />
            <OurTeam />
        </Flex>
    );
}
