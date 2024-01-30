import styles from "./styles.module.css";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

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

      <main className={styles.content}>

        <form className={styles.formToCreateList}>
          <Input 
            value={listDescription}
            placeHolder="Adicione uma nova tarefa"
            onUpdateValueInput={onUpdateValueInput}
          />

          <Button
            type="submit"
            title="Criar"
          />
        </form>

      </main>
    </div>
  );
};