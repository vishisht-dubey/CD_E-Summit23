import { createTheme, NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import React, { StrictMode } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Navbar/Navbar';
import Leaderboard from '../components/Leaderboard/Leaderboard';
export default function DashboardPage() {
  return (
    <StrictMode>
      <NextUIProvider theme={theme}>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <title>Leaderboard | Campus Director Portal | E-Cell IIT BHU</title>
        </Head>
        <div style={{backgroundColor:"white", margin: 'auto' }}>
          <Nav />
          {/* <Dashboard /> */}
          <div className="flex justify-center">
          <Leaderboard/>
          </div>
          <Footer />
        </div>
      </NextUIProvider>
    </StrictMode>
  );
}

const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
