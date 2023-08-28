import { Injectable } from "@angular/core";

import { TodoInterface } from "../../shared/todo.interface";

@Injectable({
  providedIn: "root"
})
export class TodoListLocalStorageService {
  private readonly todoStorageKey = "todoElements";

  loadTodosFromLocalStorage(): TodoInterface[] {
    const elements: string | null = localStorage.getItem(this.todoStorageKey);
    return elements != null ? JSON.parse(elements) : [];
  }

  saveTodosToLocalStorage(todos: TodoInterface[]): void {
    localStorage.setItem(this.todoStorageKey, JSON.stringify(todos));
  }
}
