import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of} from "rxjs";

import {TodoInterface} from "../../shared/todo.interface";
import {TodoListService} from "../services/todo-list.service";
import {CurrentUserService} from "../../signup/services/current-user.service";
import {UserInterface} from "../../user/interfaces/user.interface";
import {UserService} from "../../user/services/user.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoElem: string = "";
  todosArray: TodoInterface[] = [];
  editingIndex: number | null = null;
  selectedUser: UserInterface | null = null;
  currentUser$: Observable<UserInterface | null> = of(null);

  constructor(private todoListService: TodoListService, private router: Router, private currentUserService: CurrentUserService, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.currentUserService.getCurrentUser();

    this.route.params.subscribe(params => {
      const userId = params["userId"];
      if (userId) {
        this.userService.getUserById(userId).subscribe(user => {
          if (user !== null) {
            this.selectedUser = user;
            this.todoListService.loadTodosFromLocalStorage(this.selectedUser.id);
            this.synchronizeTodos();
          } else {
            this.router.navigate(["/page-not-found"]);
          }
        });
      } else {
        this.router.navigate(["/page-not-found"]);
      }
    });
  }

  onElemAdded(): void {
    if (this.todoElem.trim() !== "") {
      this.todoListService.addTodo(this.selectedUser!.id, this.todoElem);
      this.todoElem = "";
      this.synchronizeTodos();
    }
  }

  onElemDeleted(index: number): void {
    this.todoListService.deleteTodo(this.selectedUser!.id, this.todosArray[index].id);
    this.synchronizeTodos();
  }

  onElemEdit(index: number): void {
    if (this.editingIndex !== index) {
      this.todoListService.startEditing(this.selectedUser!.id, this.todosArray[index].id);
      this.resetEditing();
      this.editingIndex = index;
    }
  }

  onElemSave(index: number): void {
    this.todoListService.finishEditing(this.selectedUser!.id, this.todosArray[index].id);
    this.resetEditing();
  }

  private resetEditing(): void {
    if (this.editingIndex !== null) {
      this.todosArray[this.editingIndex].editing = false;
      this.editingIndex = null;
    }
  }

  private synchronizeTodos(): void {
    this.todosArray = [...this.todoListService.getTodos(this.selectedUser!.id)];
  }

  redirectToTodoListElement(todoId: string): void {
    this.router.navigate(["/todolist", this.selectedUser?.id, "todo", todoId]);
  }
}
