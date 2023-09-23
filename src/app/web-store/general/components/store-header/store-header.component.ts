import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {UserInterface} from "../../../../todo-list/user/interfaces/user.interface";
import {CurrentUserService} from "../../../../todo-list/signup/services/current-user.service";

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent implements OnInit, OnDestroy {
  currentUser: UserInterface | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.getCurrentUser().subscribe((user: UserInterface | null) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
