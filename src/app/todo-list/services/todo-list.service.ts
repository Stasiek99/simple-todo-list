import {  Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListLocalStorageService } from "./todo-list-local-storage.service";
import { CurrentUserService } from "../../signup/services/current-user.service";
import { UserInterface } from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})

export class TodoListService {
  private todosArray: TodoInterface[] = [];
  currentUser: UserInterface | null = null;

  constructor(private todoListLocalStorageService: TodoListLocalStorageService, private currentUserService: CurrentUserService) {
    this.currentUser = this.currentUserService.getCurrentUser();
    if(this.currentUser) {
      this.loadTodosFromLocalStorage(this.currentUser.id);
    }
  }

  loadTodosFromLocalStorage(userId: string): void {
   this.todosArray = this.todoListLocalStorageService.loadTodosFromLocalStorage(userId);
  }

  saveTodosToLocalStorage(userId: string): void {
    this.todoListLocalStorageService.saveTodosToLocalStorage(userId, this.todosArray);
  }

  initializeUserTodos(userId: string): void {
    const initialTodo: TodoInterface[] = [];
    this.todoListLocalStorageService.saveTodosToLocalStorage(userId, initialTodo)
  }

  deleteUserTodos(userId: string): void {
    this.todoListLocalStorageService.deleteTodosFromLocalStorage(userId);
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
    if(this.currentUser) {
      this.saveTodosToLocalStorage(this.currentUser.id);
    }
  }

  deleteTodo(index: number): void {
    this.todosArray.splice(index, 1);
    if(this.currentUser) {
      this.saveTodosToLocalStorage(this.currentUser.id);
    }
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
    if (this.currentUser) {
      this.saveTodosToLocalStorage(this.currentUser.id);
    }
  }

  getTodoById(id: string): TodoInterface | null {
    const foundTodo: TodoInterface | undefined = this.todosArray.find(todo => todo.id === id);
    return foundTodo || null;
  }
}
