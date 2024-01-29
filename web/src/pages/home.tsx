import styles from "./styles.module.css";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useState } from "react";


export function Home() {

  const [ listDescription, setListDescription ] = useState<string>("");

  
  function onUpdateValueInput(value:string) {
    setListDescription(value);
    return;
  };


  return (

    <div className={styles.home}>
      <Header />

      <main>

        <div>
          <Input 
            value={listDescription}
            placeHolder="Adicione uma nova tarefa"
            onUpdateValueInput={onUpdateValueInput}
          />
        </div>

      </main>
    </div>
  );
};