import {Injectable} from "@angular/core";

import {TodoInterface} from "../../shared/todo.interface";
import {TodoListLocalStorageService} from "./todo-list-local-storage.service";
import {CurrentUserService} from "../../signup/services/current-user.service";
import {UserInterface} from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})

export class TodoListService {
  private todosMap: { [userId: string]: TodoInterface[] } = {};
  currentUser: UserInterface | null = null;

  constructor(private todoListLocalStorageService: TodoListLocalStorageService, private currentUserService: CurrentUserService) {
    this.currentUser = this.currentUserService.getCurrentUser();
    if (this.currentUser) {
      this.loadTodosFromLocalStorage(this.currentUser.id);
    }
  }

  loadTodosFromLocalStorage(userId: string): void {
    this.todosMap[userId] = [...this.todoListLocalStorageService.loadTodosFromLocalStorage(userId)];
  }

  saveTodosToLocalStorage(userId: string): void {
    this.todoListLocalStorageService.saveTodosToLocalStorage(userId, this.todosMap[userId]);
  }

  saveUpdatedTodoToLocalStorage(userId: string, updatedTodo: TodoInterface): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if(!userTodos) return;

    const updatedTodos = userTodos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return {
          ...todo,
          status: updatedTodo.status
        }
      }
      return todo;
    });
    this.todosMap[userId] = updatedTodos;
    this.todoListLocalStorageService.saveTodosToLocalStorage(userId, updatedTodos);
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
    return this.todosMap[userId] ? [...this.todosMap[userId]] : [];
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
    this.todosMap[userId] = [...this.todosMap[userId], newTodo];
    this.saveTodosToLocalStorage(userId);
  }

  deleteTodo(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const index = userTodos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      const updatedUserTodos = [...userTodos.slice(0, index), ...userTodos.slice(index + 1)];
      this.todosMap[userId] = updatedUserTodos;
      this.saveTodosToLocalStorage(userId);
    }
  }

  startEditing(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const updatedUserTodos = userTodos.map((todo) => ({
      ...todo,
      editing: todo.id === todoId
    }));

    this.todosMap[userId] = updatedUserTodos;
    this.saveTodosToLocalStorage(userId);
  }

  finishEditing(userId: string, todoId: string): void {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return;

    const updatedUserTodos = userTodos.map((todo) => ({
      ...todo,
        editing: false
    }));

    this.todosMap[userId] = updatedUserTodos;
    this.saveTodosToLocalStorage(userId);
  }

  getTodoById(userId: string, todoId: string): TodoInterface | null {
    const userTodos: TodoInterface[] = this.todosMap[userId];
    if (!userTodos) return null;
    const todo = userTodos.find((t) => t.id === todoId);
    return todo || null;
  }
}
