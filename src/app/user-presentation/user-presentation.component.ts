import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../user/interfaces/user.interface";
import { UserLocalStorageService } from "../user/user-local-storage.service";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: UserInterface | null = null;

  constructor(private userService: UserLocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getSelectedUser();
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
