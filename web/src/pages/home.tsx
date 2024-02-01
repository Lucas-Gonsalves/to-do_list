import styles from "./styles.module.css";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Todo } from "../components/Todo";

import clipboard from "../assets/clipboard.svg";
import { FiPlusCircle } from "react-icons/fi";

import { FormEvent, useState } from "react";

interface List {
  id: string;
  description: string;
  isChecked: boolean;
};


export function Home() {

  const [ lists, setLists ] = useState<Array<List>>([]);
  const [ listDescription, setListDescription ] = useState<string>("");

  const [ isDisable, setisDisable ] = useState<boolean>(true);

  function countLists() {

    const checkedLengthIsTrue = lists.reduce((currentList, list) => {

      if(list.isChecked) {
        return currentList + 1
      
      } else {
        return currentList;
      };
    }, 0);

    const listsLenght = lists.length;

    return {
      checkedLengthIsTrue,
      listsLenght
    };
  };

  function verifyListDescription(listDescription: string) {
    const listDescriptionFormated = listDescription.replace(/\s/g, "")
    
    if(listDescriptionFormated == "") {
      setListDescription("");
      return true;
    
    } else {
      return false;
    };
  };


  function onUpdateValueInput(value: string) {
    setisDisable(verifyListDescription(value));
    setListDescription(value);
    return;
  };

  function createList(event: FormEvent) {
    event.preventDefault()

    
    if(verifyListDescription(listDescription)) {
      return;
    };

    function createId() {
      const id = `${Math.floor(Math.random() * 100000000) + 1}`
      
      for (let i =0; i < lists.length; i++ ) {
        
        if(lists[i].id === id) {
          createId();
        };
      };
      
      return id;
    };
    
    const newList: List= {
      id: createId(), 
      isChecked: false, 
      description: listDescription
    };

    setLists(prevState => [...prevState, newList]);

    onUpdateValueInput("")
    return;
  };

  function onCompleteList(id: string) {
    
    setLists(prevState => prevState.map(list => {

      if (list.id === id) {
        const { description, id } = list;

        const listUpdated: List = {
          id,
          description,
          isChecked: list.isChecked ? false : true
        };

        return listUpdated;
      };

      return list;
    }));
  };

  function onDeleteList(id: string) {
    setLists(prevState => prevState.filter(list => {
      return list.id !== id;
    }));

    
  };


  const { checkedLengthIsTrue, listsLenght } = countLists();

  return (

    <div className={styles.home}>
      <Header />

      <main className={styles.content}>

        <form className={styles.formToCreateList} onSubmit={(event) => {createList(event)}}>
          <Input 
            value={listDescription}
            placeHolder="Adicione uma nova tarefa"
            onUpdateValueInput={onUpdateValueInput}
          />

          <Button
            type="submit"
            title="Criar"
            icon={FiPlusCircle}
            isDisabled={isDisable}
          />
        </form>

        <section className={styles.todoList}>

          <div className={styles.todoStatus}>
              <p id={styles.blueTodoStatus} >Tarefas criadas<span>{listsLenght}</span></p>
              <p id={styles.purpleTodoStatus} >Concluídas<span>{checkedLengthIsTrue} de {listsLenght}</span></p>
          </div>

          {
            lists.length > 0 && 

            <ul className={styles.showTodoList}>
              {
                lists && lists.map(list => {
                  return (
                    <li key={list.id}>
                      <Todo 
                        id={list.id}
                        description={list.description}
                        isChecked={list.isChecked}
                        onCompleteList={onCompleteList}
                        onDeleteList={onDeleteList}
                      />
                    </li>
                  );
                })
              }
            </ul>
          }
      
          {
            lists.length <= 0 &&
  
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