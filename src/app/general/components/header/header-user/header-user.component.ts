import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {CurrentUserService} from "../../../../signup/services/current-user.service";
import {UserService} from "../../../../user/services/user.service";
import {UserInterface} from "../../../../user/interfaces/user.interface";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  userId: string | null = null;
  currentUser: UserInterface | null = null;

  constructor(private currentUserService: CurrentUserService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.currentUserService.getCurrentUserId();
    this.currentUser = this.currentUserService.getCurrentUser();
  }

  onLogOutClicked(): void {
    if (this.currentUser) this.userService.deleteUser(this.currentUser);
    this.router.navigate(["/home"])
  }
}
