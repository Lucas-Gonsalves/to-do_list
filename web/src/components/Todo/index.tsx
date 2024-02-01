import styles from "./styles.module.css";

import { ButtonCheck } from "../ButtonCheck";


interface TodoProps {
  id: string;
  description: string;
  isChecked: boolean
  onCompleteList: (id: string) => void;
  onDeleteList: (id: string) => void;
}


export function Todo({ id, description, isChecked, onCompleteList, onDeleteList }: TodoProps) {

  function handleCompleteList() {
    onCompleteList(id);
    return;
  };

  function handleDeleteList(){
    onDeleteList(id);
    return;
  };

  const isLineTrough = isChecked ? styles.lineThrough : styles.textNormal;


  return (

    <div className={styles.todo}>

      <ButtonCheck
        isActive={isChecked}
        handleCompleteList={handleCompleteList}
      />  

      <p id={isLineTrough}>{description}</p>

      <button 
        className={styles.buttonDelete} 
        onClick={() => handleDeleteList()}
      >
        <div id={styles.imageTrash} />
      </button>
    </div>
  );
};