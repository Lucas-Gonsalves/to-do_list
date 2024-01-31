import React from "react";
import styles from "./styles.module.css";


interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  icon?: React.ComponentType | undefined;
  onClick?: () => void;
};


export function Button({ title, type, icon: Icon, onClick }: ButtonProps) {
  const handleClick = onClick || (() => {});

  return (

    <button 
      className={styles.button}
      type={type}
      onClick={() => handleClick()}
    >
      {title}

      {Icon && <Icon/>}
    </button>
  );
};