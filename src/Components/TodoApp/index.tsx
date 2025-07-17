import { useState } from "react";
import { todoStore } from "../TodoStore";
import TodoList from "../TodoList";
import {
  TaskAdder,
  Application,
  InputBar,
  AddButton,
} from "../StyledComponents/app.styled";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    if (task !== "") {
      todoStore.addTodo(task);
      setTask("");
    }else{
      alert("Please enter a valid task")
    }
  };
  return (
    <Application>
      <TaskAdder>
        <InputBar
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <AddButton onClick={handleAdd}>Add</AddButton>
      </TaskAdder>

      <TodoList />
    </Application>
  );
};
export default TodoApp;
