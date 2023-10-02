import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { CurrentUserService } from "../../../signup/services/current-user.service";
import { UserInterface } from "../../../../user-management/data-access/_legacy/interfaces/user.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
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
