import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UserInterface } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user: UserInterface | null = null;
  userId: string | null = null;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params["id"];
      if (this.userId) {
        this.user = this.userService.getUserById(this.userId);
      } else {
        this.router.navigate(["/page-not-found"]);
      }
    })
  }

  redirectToUserList(): void {
    this.router.navigate(["/", "users"]);
  }

  redirectToTodoList(): void {
    this.router.navigate(["/todolist", this.userId]);
  }
}
