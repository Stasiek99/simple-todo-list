import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

import {CurrentUserService} from "../../../../signup/services/current-user.service";
import {UserInterface} from "../../../../user/interfaces/user.interface";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit, OnDestroy {
  userId: string | null = null;
  currentUser: UserInterface | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private currentUserService: CurrentUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.getCurrentUser().subscribe((user: UserInterface | null) => {
      this.currentUser = user;
      this.userId = user ? user.id : null;
    });
  }

  onLogOutClicked(): void {
    this.currentUserService.logout();
    this.router.navigate(["/store-home"])
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
