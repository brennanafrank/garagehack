import styles from "../styles/Home.module.css";
/* create stateless functional 
components with sfc */

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.garageHack}> Purdue GarageHack 2023 </h1>
      <h2>Main Website</h2>
      <h2>another one</h2>
      <h2> another one</h2>
      <h2>etc1</h2>
      <h2>placeholder placeholder</h2>
    </div>
  );
}
