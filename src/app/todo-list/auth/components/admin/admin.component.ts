import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TodoListService } from "../../../todo-list/services/todo-list.service";
import { UserInterface } from "../../../../user-management/data-access/_legacy/interfaces/user.interface";
import { UserService } from "../../../../user-management/data-access/_legacy/services/user.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  usersArray: UserInterface[] = [];

  // TODO replace userService with A UserManagementFacade
  constructor(private userService: UserService, private router: Router, private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.usersArray = this.userService.getUsers();
  }

  deleteUser(deletedUser: UserInterface): void {
    this.userService.deleteUser(deletedUser);
    this.usersArray = this.userService.getUsers();
    this.todoListService.deleteUserTodos(deletedUser.id);
  }

  approveUser(user: UserInterface): void {
    this.userService.approveUser(user);
    this.usersArray = this.userService.getUsers();
  }

  redirectToHomePage(): void {
    this.router.navigate(["/", "store-home"]);
  }
}
