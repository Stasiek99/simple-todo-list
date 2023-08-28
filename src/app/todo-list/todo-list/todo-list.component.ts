import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListService } from "../services/todo-list.service";
import { CurrentUserService } from "../../signup/services/current-user.service";
import { UserInterface } from "../../user/interfaces/user.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit{
  todoElem: string = "";
  todosArray: TodoInterface[] = [];
  editingIndex: number | null = null;
  currentUser: UserInterface | null = null;

  constructor(private todoListService: TodoListService, private router: Router, private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.currentUser = this.currentUserService.getCurrentUser()
    if (this.currentUser) {
      this.todoListService.loadTodosFromLocalStorage(this.currentUser.id)
      this.todosArray = this.todoListService.getTodos();
    }
  }

  onElemAdded(): void {
    if (this.todoElem.trim() !== "") {
      this.todoListService.addTodo(this.todoElem);
      this.todoElem = "";
    }
  }

  onElemDeleted(index: number): void {
    this.todoListService.deleteTodo(index);
  }

  onElemEdit(index: number): void {
    if (this.editingIndex !== index) {
      this.todoListService.startEditing(index);
      this.resetEditing();
      this.editingIndex = index;}
  }

  onElemSave(index: number): void {
    this.todoListService.finishEditing(index);
    this.resetEditing();
  }

  private resetEditing(): void {
    if (this.editingIndex !== null) {
      this.todosArray[this.editingIndex].editing = false;
      this.editingIndex = null;
    }
  }

  redirectToTodoListElement(id: string): void {
    this.router.navigate(["/todolist", id])
  }
}
