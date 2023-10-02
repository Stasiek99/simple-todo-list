import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";

import { TodoInterface } from "../../shared/todo.interface";
import { TodoListService } from "../services/todo-list.service";
import { CurrentUserService } from "../../signup/services/current-user.service";
import { UserService } from "../../../user-management/data-access/_legacy/services/user.service";
import { todoListOwner } from "../consts/todo-list-owner.const";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todoElem: string = "";
  todosArray: TodoInterface[] = [];
  editingIndex: number | null = null;
  // selectedUser: UserInterface | null = null;
  todoListOwnerId$: Observable<string> = this.route.paramMap.pipe(map(params => params.get(todoListOwner) as string));

  // currentUser$: Observable<UserInterface | null> = of(null);

  constructor(private todoListService: TodoListService, private router: Router, private currentUserService: CurrentUserService, private route: ActivatedRoute, private userService: UserService) {

    this.todoListService.init("2");
  }

  ngOnInit(): void {
    this.todoListOwnerId$
      .subscribe(todoListOwnerId => {
        // TODO temporary solution
        this.todoListService.init(todoListOwnerId);
        this.todoListService.loadTodosFromLocalStorage(todoListOwnerId);
        this.synchronizeTodos(todoListOwnerId);
      });
  }

  onElemAdded(todoListOwnerId: string): void {
    if (this.todoElem.trim() !== "") {
      this.todoListService.addTodo(todoListOwnerId, this.todoElem);
      this.todoElem = "";
      this.synchronizeTodos(todoListOwnerId);
    }
  }

  onElemDeleted(index: number, todoListOwnerId: string): void {
    this.todoListService.deleteTodo(todoListOwnerId, this.todosArray[index].id);
    this.synchronizeTodos(todoListOwnerId);
  }

  onElemEdit(index: number, todoListOwnerId: string): void {
    if (this.editingIndex !== index) {
      this.todoListService.startEditing(todoListOwnerId, this.todosArray[index].id);
      this.resetEditing();
      this.editingIndex = index;
    }
  }

  onElemSave(index: number, todoListOwnerId: string): void {
    this.todoListService.finishEditing(todoListOwnerId, this.todosArray[index].id);
    this.resetEditing();
  }

  private resetEditing(): void {
    if (this.editingIndex !== null) {
      this.todosArray[this.editingIndex].editing = false;
      this.editingIndex = null;
    }
  }

  private synchronizeTodos(todoListOwnerId: string): void {
    this.todosArray = [...this.todoListService.getTodos(todoListOwnerId)];
  }

  redirectToTodoListElement(todoId: string, todoListOwnerId: string): void {
    this.router.navigate(["/todolist", todoListOwnerId, "todo", todoId]);
  }
}
