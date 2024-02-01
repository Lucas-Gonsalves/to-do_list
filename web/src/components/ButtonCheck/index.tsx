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

  
  return(
    <button
      type="button"
      className={styles.buttonComplete}
      onClick={() => {callHandleCompleteList()}}
    > 
      {
          isActive && 
          <div id={styles.imageCircleChecked} />
        }

        {
          !isActive && 
          <div id={styles.imageCircleUnchecked}/> 
        }
    </button>
  );
};