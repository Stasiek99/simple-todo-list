import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../user/interfaces/user.interface";
import { UserLocalStorageService } from "../user/user-local-storage.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user: UserInterface | null = null;

  constructor(private userService: UserLocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getSelectedUser();
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
