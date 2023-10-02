import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListService } from "../services/todo-list.service";
import { UserInterface } from "../../../user-management/data-access/_legacy/interfaces/user.interface";
import { UserService } from "../../../user-management/data-access/_legacy/services/user.service";

@Component({
  selector: "app-todo-list-element",
  templateUrl: "./todo-list-element.component.html",
  styleUrls: ["./todo-list-element.component.scss"]
})
export class TodoListElementComponent implements OnInit {
  todo: TodoInterface | null;
  selectedUser: UserInterface | null = null;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute, private router: Router, private userService: UserService) {
    // todo local! temporary solution (mock)
    this.todoListService.init("0");

    this.todo = null;
    this.selectedUser = null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params["userId"];
      const todoId = params["todoId"];
      this.selectedUser = this.userService.getUserById(userId);
      if (todoId && this.selectedUser) {
        this.todoListService.loadTodosFromLocalStorage(userId);
        this.todo = this.todoListService.getTodoById(userId, todoId);
      }
    });
  }

  toggleStatus(): void {
    if (this.todo && this.selectedUser) {
      const updatedTodo: TodoInterface = {
        ...this.todo,
        status: this.todo.status === "done" ? "undone" : "done"
      };

      this.todoListService.saveUpdatedTodoToLocalStorage(this.selectedUser.id, updatedTodo);
      this.todo = updatedTodo;
    }
  }

  redirectToTodoList(id: string): void {
    this.router.navigate(["/todolist", id]);
  }
}


