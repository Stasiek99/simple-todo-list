import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {UserInterface} from "../../../user/interfaces/user.interface";
import {CurrentUserService} from "../../../signup/services/current-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserInterface | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUserSubject.subscribe((user: UserInterface | null) => {
      this.currentUser = user;
    })
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription){
      this.currentUserSubscription.unsubscribe();
    }
  }
}
