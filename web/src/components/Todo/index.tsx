import styles from "./styles.module.css";


interface TodoProps {
  id: string;
  description: string;
  isDone: boolean;
  onCompleteList: (id: string) => void;
  onDeleteList: (id: string) => void;
}

export function Todo({ id, description, isDone, onCompleteList, onDeleteList }: TodoProps) {

  function callOnCompleteList(id: string){
    onCompleteList(id);
    return;
  };

  function callOnDeleteList(id: string){
    onDeleteList(id);
    return;
  };

  return (

    <div className={styles.todo}>
      <button
        onClick={() => callOnCompleteList(id)}
      />

      <p>{description}</p>
      
      <button
        className={styles.buttonDelete}
        onClick={() => callOnDeleteList(id)}
      />
    </div>
  );
};