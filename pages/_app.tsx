import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React, { useState, createContext, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const myRef = useRef<HTMLDivElement>(null);
  const [MousePosition, setMousePosition] = useState({
    left: 0,
  });

  /* ignore the warning here, it doesn't matter that
  ev can be any type */
  const handleMouseMove = (ev: MouseEvent) => {
    setMousePosition({ left: ev.pageX });
    console.log(MousePosition.left);
    console.log(document);
    console.log(myRef.current);
    const pageContainer = myRef.current;
    /* for each 90th of the width of  right, startGrad loses*/
    if (pageContainer != null) {
      console.log(
        getComputedStyle(pageContainer).getPropertyValue("--startGrad")
      );
      if (MousePosition.left > 400) {
        pageContainer.style.setProperty("--startGrad", "purple");
      }
    }

    if (pageContainer != null && screen.width > 599) {
    }

    if (MousePosition.left > 400) {
    }
  };

  return (
    <div
      onMouseMove={(ev) => handleMouseMove(ev)}
      ref={myRef}
      className={styles.pageContainer}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export const getCodingRef = () => useRef<HTMLHeadingElement>(null);
