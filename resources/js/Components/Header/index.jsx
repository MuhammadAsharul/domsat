import * as React from "react";
import {
    Container,
    chakra,
    Stack,
    Text,
    Button,
    Box,
    Flex,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <Flex
            width={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            minH={"80vh"}
        >
            <Stack direction="column" spacing={6} alignItems="center">
                <chakra.h1
                    fontSize={{ base: "4xl", sm: "5xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    maxW="600px"
                >
                    let's work together{" "}
                    <chakra.span
                        color="teal"
                        bg="linear-gradient(transparent 50%, #83e9e7 50%)"
                    >
                        with domsat
                    </chakra.span>
                </chakra.h1>
                <Text
                    maxW="550px"
                    fontSize="xl"
                    textAlign="center"
                    color="gray.500"
                    px={{ base: "5", sm: "0" }}
                >
                    Chakra UI is a simple, modular and accessible component
                    library that gives you the building blocks you need to build
                    your React applications.
                </Text>
                <Stack direction={{ base: "column", sm: "row" }} spacing={5}>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        rounded="md"
                        size="lg"
                        height="3.5rem"
                        fontSize="1.2rem"
                    >
                        Get Started
                    </Button>
                    <Button
                        leftIcon={<FaGithub />}
                        colorScheme="gray"
                        variant="outline"
                        rounded="md"
                        size="lg"
                        height="3.5rem"
                        fontSize="1.2rem"
                    >
                        Github
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default Header;
