import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../../interfaces/user.interface";
import { UserLocalStorageService } from "../../user-local-storage.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  usersArray: UserInterface[] = [];

  constructor(private userLocalStorageService: UserLocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.usersArray = this.userLocalStorageService.getUsers();
  }

  redirectToUserProfile(id: string): void {
    this.router.navigate(["/users", id]);
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
