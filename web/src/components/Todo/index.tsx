import { useState } from "react";
import styles from "./styles.module.css";

import { TbTrash }  from "react-icons/tb";

interface TodoProps {
  id: string;
  description: string;
  onCompleteList: (id: string) => void;
  onDeleteList: (id: string) => void;
}

export function Todo({ id, description, onCompleteList, onDeleteList }: TodoProps) {
  const [ isDone, setIsDone ] = useState<boolean>(false);

  function callOnCompleteList(id: string){
    onCompleteList(id);
    return;
  };

  function callOnDeleteList(id: string){
    onDeleteList(id);
    return;
  };

  function handleChangeIsDone() {
    setIsDone(prevState => prevState ? false : true);
    return;
  };

  return (

    <div className={styles.todo}>
      <button
        className={styles.buttonComplete}
        onClick={() => {handleChangeIsDone()}}
      >
        {
          isDone && 
          <div id={styles.imageCircleChecked} />
        }

        {
          !isDone && 
          <div id={styles.imageCircleUnchecked}/> 
        }
      </button>

      <p>{description}</p>
      
      <button
        className={styles.buttonDelete}
        onClick={() => callOnDeleteList(id)}
      >
        <TbTrash />
      </button>
    </div>
  );
};