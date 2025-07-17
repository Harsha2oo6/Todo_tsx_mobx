import { observer } from "mobx-react-lite";
import TodoItem from "../TodoItem";
import { todoStore } from "../TodoStore";
import {
  FilterButton,
  ButtonsWrapper,
  ListContainer,
  TaskName,
} from "../StyledComponents/list.styled";

const TodoList = observer(() => {
  const List = todoStore.getFillteredTodos();
  const renderTodos = List.map((each) => (
    <TodoItem key={each.id} details={each} />
  ));
  return (
    <>
      <ButtonsWrapper>
        <FilterButton bg={"grey"} onClick={() => todoStore.setCategory("all")}>
          All
        </FilterButton>
        <FilterButton
          bg={"green"}
          onClick={() => todoStore.setCategory("active")}
        >
          Active
        </FilterButton>
        <FilterButton
          bg={"red"}
          onClick={() => todoStore.setCategory("completed")}
        >
          Completed
        </FilterButton>
      </ButtonsWrapper>

      <ListContainer>
        {List.length === 0 ? (
          <TaskName>No Tasks to display</TaskName>
        ) : (
          renderTodos
        )}
      </ListContainer>
    </>
  );
});
export default TodoList;
