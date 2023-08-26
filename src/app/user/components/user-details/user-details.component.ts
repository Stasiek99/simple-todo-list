import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../../interfaces/user.interface";
import { CurrentUserService } from "../../../signup/components/services/current-user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user: UserInterface | null = null;

  constructor(private currentUserService: CurrentUserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.currentUserService.getCurrentUser();
  }

  redirectToUserList(): void {
    this.router.navigate(["/", "users"]);
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
