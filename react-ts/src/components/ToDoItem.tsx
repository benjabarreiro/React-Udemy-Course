import { FC } from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem: FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default ToDoItem;
