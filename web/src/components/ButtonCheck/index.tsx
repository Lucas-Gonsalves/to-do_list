import styles from "./styles.module.css";


interface ButtonCheckProps {
  isActive: boolean;
  handleCompleteList?: () => void;
};


export function ButtonCheck({ handleCompleteList, isActive }: ButtonCheckProps) {

  function callHandleCompleteList() {
    handleCompleteList ? handleCompleteList() : (() => {});
    return;
  };

  const idToInsert = isActive ? styles.imageCircleChecked : styles.imageCircleUnchecked;
  
  return(
    <button
      type="button"
      className={styles.buttonComplete}
      onClick={() => {callHandleCompleteList()}}
    > 

      <div id={idToInsert} />

    </button>
  );
};