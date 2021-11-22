import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewToDo />
      <ToDos />
    </TodosContextProvider>
  );
}

export default App;
