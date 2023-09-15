import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {UserInterface} from "../../../../user/interfaces/user.interface";
import {CurrentUserService} from "../../../../signup/services/current-user.service";
import {UserService} from "../../../../user/services/user.service";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  userId: string | null = null;
  currentUser: UserInterface | null = null;

  constructor(private currentUserService: CurrentUserService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.currentUserService.getCurrentUserId();
    this.currentUser = this.currentUserService.getCurrentUser();
  }

  onLogOutClicked(): void {
    this.currentUserService.logout();
    this.router.navigate(["/home"])
  }
}
