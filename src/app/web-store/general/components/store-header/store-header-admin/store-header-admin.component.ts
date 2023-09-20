import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

import {UserInterface} from "../../../../../todo-list/user/interfaces/user.interface";
import {CurrentUserService} from "../../../../../todo-list/signup/services/current-user.service";

@Component({
  selector: 'app-store-header-admin',
  templateUrl: './store-header-admin.component.html',
  styleUrls: ['./store-header-admin.component.scss']
})
export class StoreHeaderAdminComponent implements OnInit, OnDestroy{
  itemsQuantity = 1;
  userId: string | null = null;
  currentUser: UserInterface | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private currentUserService: CurrentUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUserSubject.subscribe((user: UserInterface | null) => {
      this.currentUser = user;
      this.userId = user ? user.id : null;
    });
  }

  onLogOutClicked(): void {
    this.currentUserService.logout();
    this.router.navigate(["/home"])
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
