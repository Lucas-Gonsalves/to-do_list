import styles from "./styles.module.css";


interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  icon?: string;
  onClick?: () => void;
};


export function Button({ title, type, icon, onClick }: ButtonProps) {
  const handleClick = onClick || (() => {});

  return (

    <button 
      className={styles.button}
      type={type}
      onClick={() => handleClick()}
    >
      {title}

      {icon && <img src={icon}/>}
    </button>
  );
};