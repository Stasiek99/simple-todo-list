import {  Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";

@Injectable({
  providedIn: "root"
})

export class TodoListService {
  private todosArray: TodoInterface[] = [];

  constructor() {
    this.loadTodosFromLocalStorage();
  }

  private loadTodosFromLocalStorage(): void {
    const elements: string | null = localStorage.getItem("todoElements");
    if (elements != null) {
      const parsedElements: TodoInterface[] = JSON.parse(elements);
      this.todosArray = parsedElements.map((element) => ({
        ...element,
        editing: false
      }));
    }
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem("todoElements", JSON.stringify(this.todosArray));
  }

  getTodos(): TodoInterface[] {
    return this.todosArray
  }

  addTodo(description: string): void {
    const newTodo: TodoInterface = {id: Date.now().toString(), description, editing: false };
    this.todosArray.push(newTodo);
    this.saveTodosToLocalStorage();
  }

  deleteTodo(index: number): void {
    this.todosArray.splice(index, 1);
    this.saveTodosToLocalStorage();
  }

  editTodo(index: number): void {
    this.todosArray[index].editing = true;
  }

  saveTodo(index: number): void {
    this.todosArray[index].editing = false;
    this.saveTodosToLocalStorage()
  }
}
