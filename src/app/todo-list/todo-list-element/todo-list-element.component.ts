import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListService } from "../services/todo-list.service";
import {UserInterface} from "../../user/interfaces/user.interface";
import {CurrentUserService} from "../../signup/services/current-user.service";

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit{
  todo: TodoInterface | null;
  currentUser: UserInterface | null = null;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute, private router: Router, private currentUserService: CurrentUserService) {
    this.todo = null;
    this.currentUser = this.currentUserService.getCurrentUser();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const todoId = params["id"];
      if (todoId && this.currentUser) {
        this.todoListService.loadTodosFromLocalStorage(this.currentUser.id)
        this.todo = this.todoListService.getTodoById(todoId);
      }
    });
  }

  toggleStatus(): void {
    if (this.todo && this.currentUser) {
      this.todo.status = this.todo.status === "done" ? "undone" : "done";
      this.todoListService.saveTodosToLocalStorage(this.currentUser.id);
    }
  }

  redirectToTodoList(): void {
    this.router.navigate(["/todolist"]);
  }
}


