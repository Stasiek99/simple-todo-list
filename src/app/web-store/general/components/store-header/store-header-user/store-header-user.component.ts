import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInterface} from "../../../../../todo-list/user/interfaces/user.interface";
import {Subscription} from "rxjs";
import {CurrentUserService} from "../../../../../todo-list/signup/services/current-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-store-header-user',
  templateUrl: './store-header-user.component.html',
  styleUrls: ['./store-header-user.component.scss']
})
export class StoreHeaderUserComponent implements OnInit, OnDestroy{
  itemsQuantity = 1;
  userId: string | null = null;
  currentUser: UserInterface | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private currentUserService: CurrentUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUserSubject.subscribe((user: UserInterface | null) => {
      this.currentUser = user;
      this.userId = user ? user.id : null
    })
  }

  onLogOutClicked(): void {
    this.currentUserService.logout();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

}
