import "../styles/globals.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
