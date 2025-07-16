
import type { Todo } from "../../Components/TodoStore";

export function saveTodosToStorage(todos: Todo[]) {
  localStorage.setItem("saved_todos", JSON.stringify(todos));
}


export function loadTodosFromStorage(): Todo[] {
  const data = localStorage.getItem("saved_todos");
  return data ? JSON.parse(data) : [];
}
