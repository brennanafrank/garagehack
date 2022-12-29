import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Layout({ children }) {
  var myRef = React.createRef();
  return (
    <div className={styles.layout} ref={myRef}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
