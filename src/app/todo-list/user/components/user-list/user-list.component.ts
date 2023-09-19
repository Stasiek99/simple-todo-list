import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  usersArray: UserInterface[] = [];

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.usersArray = this.userService.getUsers();
  }

  redirectToUserProfile(id: string): void {
    this.router.navigate(["/users", id]);
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
