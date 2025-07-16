import { autorun, makeAutoObservable } from "mobx";
import {
  loadTodosFromStorage,
  saveTodosToStorage,
} from "../../Services/Todos/getSavedTodos";

export type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

class TodoStore {
  todosList: Todo[];

  constructor() {
    makeAutoObservable(this);
    this.todosList = loadTodosFromStorage();
    autorun(() => {
      saveTodosToStorage(this.todosList);
    });
  }
  addTodo(value: string) {
    const newTodo: Todo = {
      id: Date.now(),
      todo: value,
      isDone: false,
    };
    this.todosList.push(newTodo);
  }
  deleteTodo(id: number) {
    const newList = this.todosList.filter((todo) => todo.id !== id);
    this.todosList = newList;
  }
  toggleDone(id: number) {
    const todo = this.todosList.find((item) => item.id === id);
    if (todo) {
      todo.isDone = !todo.isDone;
    }
  }
}

export const todoStore = new TodoStore();
