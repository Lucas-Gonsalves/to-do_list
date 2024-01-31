import styles from "./styles.module.css";

import { ButtonCheck } from "../ButtonCheck";

import { useState } from "react";

interface TodoProps {
  id: string;
  description: string;
  onCompleteList: (id: string) => void;
  onDeleteList: (id: string) => void;
}

export function Todo({ id, description, onCompleteList, onDeleteList }: TodoProps) {
  const [ isChecked, setIsChecked ] = useState<boolean>(false);

  function callOnCompleteList(id: string){
    onCompleteList(id);
    return;
  };

  function callOnDeleteList(id: string){
    onDeleteList(id);
    return;
  };

  function onChangeChack() {
    setIsChecked(prevState => prevState ? false : true);
    return;
  };

  const isLineTrough = isChecked ? styles.lineThrough : styles.textNormal

  return (

    <div className={styles.todo}>

      <ButtonCheck
        isActive={isChecked}
        onChangeChack={onChangeChack}
        
      />  

      <p id={isLineTrough}>{description}</p>
      
      <button className={styles.buttonDelete} onClick={() => callOnDeleteList(id)}>
        <div id={styles.imageTrash} />
      </button>
    </div>
  );
};