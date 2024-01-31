import styles from "./styles.module.css";


interface ButtonCheckProps {
  isActive: boolean;
  onChangeChack?: () => void;
};

export function ButtonCheck({ onChangeChack, isActive }: ButtonCheckProps) {

  function handleOnChangeChack() {
    onChangeChack ? onChangeChack() : (() => {});
    return;
  };

  
  return(
    <button
      type="button"
      className={styles.buttonComplete}
      onClick={() => {handleOnChangeChack()}}
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