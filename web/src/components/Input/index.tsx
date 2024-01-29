import styles from "./styles.module.css";

import { ChangeEvent } from "react";


interface InputAtribute {
  value: string;
  placeHolder: string;
  onUpdateValueInput: (value: string) => void;
};

export function Input({value, placeHolder, onUpdateValueInput}: InputAtribute) {

  function callerOfUpdateValueInput(event: ChangeEvent<HTMLInputElement>) {
    onUpdateValueInput(event.target.value);
    return;
  };

  return (

    <input className={ styles.input }
      value={value}
      placeholder={placeHolder}
      onChange={(event) => {callerOfUpdateValueInput(event)}}
    />
  );
};