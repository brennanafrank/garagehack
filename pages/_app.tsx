import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React, { useState, createContext, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const myRef = useRef("beepis");
  const [MousePosition, setMousePosition] = useState({
    left: 0,
  });

  /* ignore the warning here, it doesn't matter that
  ev can be any type */
  function handleMouseMove(ev) {
    setMousePosition({ left: ev.pageX });
    console.log(MousePosition.left);
    console.log(document);
    console.log(myRef.current);
  }
  return (
    <div onMouseMove={(ev) => handleMouseMove(ev)} ref={myRef}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
