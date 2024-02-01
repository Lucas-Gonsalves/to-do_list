import React from "react";
import styles from "./styles.module.css";


interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  icon?: React.ComponentType | undefined;
  isDisabled?: boolean;
  onClick?: () => void;
};


export function Button({ title, type, icon: Icon, isDisabled = false, onClick }: ButtonProps) {
  const handleClick = onClick || (() => {});

  return (

    <button 
      className={styles.button}
      type={type}
      onClick={() => handleClick()}
      disabled={isDisabled}
    >
      {title}
      
      {Icon && <Icon/>}
    </button>
  );
};