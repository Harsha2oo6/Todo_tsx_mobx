import { observer } from "mobx-react-lite";
import { todoStore, type Todo } from "../TodoStore";

type Props = {
  details: Todo;
};

const TodoItem =observer( ({ details }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked = {details.isDone}
        onChange={() => todoStore.toggleDone(details.id)}
      ></input>
      <p style={{ textDecoration: details.isDone ? "line-through" : "none" }}>
        {details.todo}
      </p>
      <button onClick={()=>todoStore.deleteTodo(details.id)}>X</button>
    </li>
  );
}
)
export default TodoItem;
