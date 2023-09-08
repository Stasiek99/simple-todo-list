import {  Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListLocalStorageService } from "./todo-list-local-storage.service";
import { CurrentUserService } from "../../signup/services/current-user.service";
import { UserInterface } from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})

export class TodoListService {
  private todosMap: { [userId: string]: TodoInterface[]} = {};
  currentUser: UserInterface | null = null;

  constructor(private todoListLocalStorageService: TodoListLocalStorageService, private currentUserService: CurrentUserService) {
    this.currentUser = this.currentUserService.getCurrentUser();
    if(this.currentUser) {
      this.loadTodosFromLocalStorage(this.currentUser.id);
    }
  }

  loadTodosFromLocalStorage(userId: string): void {
    this.todosMap[userId] = this.todoListLocalStorageService.loadTodosFromLocalStorage(userId);
  }

  saveTodosToLocalStorage(userId: string): void {
    this.todoListLocalStorageService.saveTodosToLocalStorage(userId, this.todosMap[userId]);
  }

  initializeUserTodos(userId: string): void {
    this.todosMap[userId] = [];
    this.saveTodosToLocalStorage(userId);
  }

  deleteUserTodos(userId: string): void {
    delete this.todosMap[userId];
    this.todoListLocalStorageService.deleteTodosFromLocalStorage(userId);
  }

  getTodos(userId: string): TodoInterface[] {
    return this.todosMap[userId];
  }

  addTodo(userId: string, description: string): void {
    const newTodo: TodoInterface = {
      description,
      editing: false,
      status: "undone",
      date: new Date().toDateString(),
      id: Date.now().toString()
    };
    if (!this.todosMap[userId]) {
      this.todosMap[userId] = [];
    }
    this.todosMap[userId].push(newTodo);
      this.saveTodosToLocalStorage(userId);
  }

  deleteTodo(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const index = userTodos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      userTodos.splice(index, 1);
      this.saveTodosToLocalStorage(userId);
    }
  }

  startEditing(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const todo: TodoInterface | undefined = userTodos.find((t) => t.id === todoId);
    if (todo) {
      userTodos.forEach((t) => (t.editing = false));
      todo.editing = true;
      this.saveTodosToLocalStorage(userId);
    }
  }

  finishEditing(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const todo: TodoInterface | undefined = userTodos.find((t) => t.id === todoId);
    if (todo) {
      todo.editing = false;
      this.saveTodosToLocalStorage(userId);
    }
  }

  getTodoById(userId: string, todoId: string): TodoInterface | null {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return null;
    const todo = userTodos.find((t) => t.id === todoId);
    return todo || null;
  }
}
