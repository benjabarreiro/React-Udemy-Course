import { createContext, FC, useState } from "react";
import ToDo from "../models/todo";

type TodosContextObj = {
	items: ToDo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
  }

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = ({ children }) => {
	const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new ToDo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
	  items: todos,
	  addTodo: addTodoHandler,
	  removeTodo: removeTodoHandler
  }
  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};


export default TodosContextProvider