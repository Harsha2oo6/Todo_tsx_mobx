import { observer } from "mobx-react-lite";
import { todoStore, type Todo } from "../TodoStore";

import {
  ListItem,
  DeleteButton,
  Task,
  CheckBox,
  DeleteContainer,
  TaskName
} from "../StyledComponents/list.styled";

type Props = {
  details: Todo;
};

const TodoItem = observer(({ details }: Props) => {
  return (
    <ListItem>
      <Task>
        <CheckBox
          type="checkbox"
          checked={details.isDone}
          onChange={() => todoStore.toggleDone(details.id)}
        ></CheckBox>
        <TaskName style={{ textDecoration: details.isDone ? "line-through" : "none" }}>
          {details.todo}
        </TaskName>
      </Task>

      <DeleteContainer>
        <DeleteButton onClick={() => todoStore.deleteTodo(details.id)}>
          X
        </DeleteButton>
      </DeleteContainer>
    </ListItem>
  );
});
export default TodoItem;
