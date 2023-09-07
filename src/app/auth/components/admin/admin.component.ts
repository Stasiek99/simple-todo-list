import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../../../user/interfaces/user.interface";
import { UserLocalStorageService } from "../../../user/services/user-local-storage.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  usersArray: UserInterface[] = [];

  constructor(private userLocalStorageService: UserLocalStorageService, private router: Router) {
  }
  ngOnInit(): void {
    this.usersArray = this.userLocalStorageService.getUsers();
  }

  deleteUser(deletedUser: UserInterface): void {
    this.userLocalStorageService.deleteUser(deletedUser);
    this.usersArray = this.userLocalStorageService.getUsers();
  }

  redirectToHomePage(): void {
    this.router.navigate(["/", "home"])
  }
}
