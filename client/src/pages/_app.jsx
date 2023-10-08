import { StateProvider } from "@/context/StateContext.jsx";
import reducer, { initialState } from "@/context/StateReducers.js";
import "@/styles/globals.css";
import Head from "next/head.js";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />;
    </StateProvider>
  )
  
}
