import styles from "./styles.module.css";

import { ChangeEvent } from "react";


interface InputProps {
  value: string;
  placeHolder: string;
  onUpdateValueInput: (value: string) => void;
};


export function Input({value, placeHolder, onUpdateValueInput}: InputProps) {

  function callUpdateValueInput(event: ChangeEvent<HTMLInputElement>) {
    onUpdateValueInput(event.target.value);
    return;
  };

  return (

    <input className={ styles.input }
      value={value}
      placeholder={placeHolder}
      onChange={(event) => {callUpdateValueInput(event)}}
    />
  );
};