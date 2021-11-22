import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import ToDoItem from "./ToDoItem";
import classes from "./ToDos.module.css";
const ToDos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((item: any) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
