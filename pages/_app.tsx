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
    /* for every 90th of the screen right, startGrad loses 1 rgb value for
    green and blue while endGrad loses 1 rgb value for green only */
    if (pageContainer != null && screen.width > 599) {
      var offset = Math.floor(MousePosition.left / (screen.width / 90));
      offset *= 2;

      const newStartGrad =
        "rgb(" + 255 + ", " + (198 - offset) + ", " + (211 - offset) + ")";
      const newEndGrad =
        "rgb(" + 250 + ", " + (153 + offset) + ", " + (5 + offset) + ")";

      // reconfigure startGrad and endGrad to be the new value
      pageContainer.style.setProperty("--startGrad", newStartGrad);
      pageContainer.style.setProperty("--endGrad", newEndGrad);
      console.log("sending " + newStartGrad);
      console.log("sending " + newEndGrad);
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
