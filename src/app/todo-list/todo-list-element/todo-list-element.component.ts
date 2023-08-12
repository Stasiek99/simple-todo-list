import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListService } from "../services/todo-list.service";

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit{
  todo: TodoInterface | null;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute, private router: Router) {
    this.todo = null
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const todoId = params["id"];
      if (todoId) {
        this.todo = this.todoListService.getTodoById(todoId);
      }
    });
  }

  toggleStatus(): void {
    if (this.todo) {
      this.todo.status = this.todo.status === "done" ? "undone" : "done";
      this.todoListService.saveTodosToLocalStorage()
    }
  }

  redirectToTodoList(): void {
    this.router.navigate(["/todolist"]);
  }
}


