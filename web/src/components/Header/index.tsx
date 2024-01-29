import styles from "./styles.module.css";

import rocketSvg from "../../assets/rocket.svg"


export function Header() {

  return (
    <header className={styles.header}>

      <div className={styles.logo}>

        <img src={rocketSvg} alt="logo to-do List" />
        <h1>to<span>do</span></h1>
      
      </div>

    </header>
  );
};