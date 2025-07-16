import { autorun, makeAutoObservable } from "mobx";
import {
  loadTodosFromStorage,
  saveTodosToStorage,
} from "../../Services/Todos/getSavedTodos";

export class Todo {
  id: number;
  todo: string;
  isDone: boolean;

  constructor(id: number, todo: string, isDone: boolean = false) {
    makeAutoObservable(this);
    this.id = id;
    this.todo = todo;
    this.isDone = isDone;
  }

  toggle() {
    this.isDone = !this.isDone;
  }
}
class TodoStore {
  todosList: Todo[];

  constructor() {
    makeAutoObservable(this);
    this.todosList = loadTodosFromStorage().map(
      (t) => new Todo(t.id, t.todo, t.isDone)
    );
    autorun(() => {
      saveTodosToStorage(this.todosList);
    });
  }
  addTodo(value: string) {
    const newTodo = new Todo(Date.now(), value);
    this.todosList.push(newTodo);
  }
  deleteTodo(id: number) {
    const newList = this.todosList.filter((todo) => todo.id !== id);
    this.todosList = newList;
  }
  toggleDone(id: number) {
    const todo = this.todosList.find((item) => item.id === id);
    if (todo) {
      todo.toggle();
    }
  }
}

export const todoStore = new TodoStore();
