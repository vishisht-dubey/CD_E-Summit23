import React, { StrictMode } from "react";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar/Navbar.jsx";
import Why from "../components/Why/Why.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Sats from "../components/Sats/Sats.jsx";
import Feature from "../components/Feature/Feature.jsx";
import Responsibilities from "../components/Responsibilities/Responsibilities.jsx";
import Testimonials from "../components/Testimonial/Testimonials.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sponsors from "../components/Sponsors/Sponsors";
export default function Home() {
  return (
    <StrictMode styles={{ maxWidth: "1600px" }}>
      <NextUIProvider theme={theme} id="vishisht">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Campus Director Portal | E-Cell IIT BHU</title>
        </Head>
        <div className="w-full bg-white">
          <Navbar />
        </div>

        <div>
          <Hero />
        </div>
        <div id="whyCD">
          <Why />
        </div>
        <Sats />
        <div id="what-we-offer">
          <Feature />
        </div>
        <div id="responsibilities">
          <Responsibilities />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="sponsors">
          {/* <Sponsors/> */}
        </div>
        <CTA />
        <div id="contacts">
          <Footer />
        </div>
      </NextUIProvider>
    </StrictMode>
  );
}

//theme
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$white",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
