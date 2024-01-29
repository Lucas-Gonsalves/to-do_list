import styles from "./styles.module.css";

import { Header } from "../components/Header";


export function Home() {
  return (

    <div className={styles.home}>
      <Header />
    </div>
  );
};