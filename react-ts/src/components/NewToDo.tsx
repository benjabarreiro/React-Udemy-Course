import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewToDo.module.css";

const NewToDo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // If you know that the ref is  set to a value when we use it you write --> current!.value. Basically you're 100% that the value can't be null
    //if the ref is not necesarily set to a value when we use it you write --> current?.value

    if (enteredText?.trim().length === 0) {
      // throw error
      return;
    }

    addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">To Do Text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add To Do</button>
    </form>
  );
};

export default NewToDo;
