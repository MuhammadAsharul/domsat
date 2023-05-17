import "@fontsource/poppins/400.css";
import "@fontsource/open-sans/700.css";

import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

export default function Home(props) {
    // const { name, age } = props;
    // console.log(name);

    return (
        <>
            <Navbar />
            <Header />
        </>
    );
}
