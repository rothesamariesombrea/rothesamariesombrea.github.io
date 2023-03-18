import React from "react";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rothesa Marie Sombrea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
