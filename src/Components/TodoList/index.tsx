import { observer } from "mobx-react-lite";
import TodoItem from "../TodoItem";
import { todoStore,  } from "../TodoStore";


const TodoList =observer( () => {
  return (
    <ul>
      {todoStore.todosList.map((each) => (
        <TodoItem key ={each.id} details={each}/>
      ))}
    </ul>
  );
});
export default TodoList;
