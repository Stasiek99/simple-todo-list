import {  Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListLocalStorageService } from "./todo-list-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class TodoListService {
  private todosArray: TodoInterface[] = [];

  constructor(private todoListLocalStorageService: TodoListLocalStorageService) {
    this.loadTodosFromLocalStorage();
  }

  private loadTodosFromLocalStorage(): void {
   this.todosArray = this.todoListLocalStorageService.loadTodosFromLocalStorage();
  }

  saveTodosToLocalStorage(): void {
    this.todoListLocalStorageService.saveTodosToLocalStorage(this.todosArray);
  }

  getTodos(): TodoInterface[] {
    return this.todosArray;
  }

  addTodo(description: string): void {
    const newTodo: TodoInterface = {
      description,
      editing: false,
      status: "undone",
      date: new Date().toDateString(),
      id: Date.now().toString()
    };
    this.todosArray.push(newTodo);
    this.saveTodosToLocalStorage();
  }

  deleteTodo(index: number): void {
    this.todosArray.splice(index, 1);
    this.saveTodosToLocalStorage();
  }

  startEditing(index: number): void {
    this.todosArray.forEach((todo, i) => {
      if (i !== index) {
        todo.editing = false;
      }
    });
    this.todosArray[index].editing = true;
  }

  finishEditing(index: number): void {
    this.todosArray[index].editing = false;
    this.saveTodosToLocalStorage();
  }

  getTodoById(id: string): TodoInterface | null {
    const foundTodo = this.todosArray.find(todo => todo.id === id);
    return foundTodo || null;
  }
}
