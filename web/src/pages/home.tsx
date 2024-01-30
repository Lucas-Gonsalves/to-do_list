import styles from "./styles.module.css";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import plus from "../assets/plus-icon.svg";
import clipboard from "../assets/clipboard.svg";

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
            icon={plus}
          />
        </form>

        <section className={styles.todoList}>

          <div className={styles.todoStatus}>
              <p id={styles.blueTodoStatus} >Tarefas criadas<span>5</span></p>
              <p id={styles.purpleTodoStatus} >Concluídas<span>2 de 5</span></p>
          </div>

          {
            false && 

            <ul className={styles.showTodoList}>

              <li>
                
              </li>

            </ul>
          }
          
          {
            true &&
  
            <div className={styles.emptyTodoList}>
              <img src={clipboard} />

              <p><span>Você ainda não tem tarefas cadastradas</span></p>
              <p>Crie tarefas e organize seus itens a fazer</p>

            </div>
          }

        </section>
      </main>
    </div>
  );
};