import "@fontsource/poppins/400.css";
import "@fontsource/open-sans/700.css";

import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

import React from "react";
import Header from "../Components/Header";
import Work  from "../Components/Work";
import Serving from "../Components/Serving";
import About from "../Components/About";
import Footer from "../Components/Footer";
import OurTeam from "../Components/OurTeam";

export default function Home(props) {

    return (
        <Flex 
            flexDir={'column'}
            // justify={'center'} 
            // alignItems={'center'}
            bg={useColorModeValue('white', 'black')}
            overflowY={'scroll'}
            // overflowX={'hidden'} 
            scrollSnapType="y mandatory"
            scrollBehavior={'smooth'}
            height={'100vh'}
            transition="all 2s"
        >
            <Header />
            <Work />
            <Serving />
            <About/>
            <OurTeam />
            <Footer/>
        </Flex>
    );
}
