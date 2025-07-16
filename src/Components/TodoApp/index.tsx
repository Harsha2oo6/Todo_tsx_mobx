import { useState } from "react";
import { todoStore } from "../TodoStore";
import TodoList from "../TodoList";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    todoStore.addTodo(task);
    setTask("");
  };
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <TodoList/>
    </div>
  );
};
export default TodoApp;
