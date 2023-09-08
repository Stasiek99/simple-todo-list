import { Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";

@Injectable({
  providedIn: "root"
})
export class TodoListLocalStorageService {
  private readonly todoStorageKeyPrefix = "todoElements";

  loadTodosFromLocalStorage(userId: string): TodoInterface[] {
    const elements: string | null = localStorage.getItem(`${this.todoStorageKeyPrefix}_${userId}`);
    return elements != null ? JSON.parse(elements) : [];
  }

  saveTodosToLocalStorage(userId: string, todos: TodoInterface[]): void {
    localStorage.setItem(`${this.todoStorageKeyPrefix}_${userId}`, JSON.stringify(todos));
  }

  deleteTodosFromLocalStorage(userId: string): void {
    window.localStorage.removeItem(`${this.todoStorageKeyPrefix}_${userId}`);
  }
}
