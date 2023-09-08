import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../../../user/interfaces/user.interface";
import { TodoListService } from "../../../todo-list/services/todo-list.service";
import { UserService } from "../../../user/services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  usersArray: UserInterface[] = [];

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

  redirectToHomePage(): void {
    this.router.navigate(["/", "home"])
  }
}
