import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthFacade } from "../../../../../auth";
import { UserContract } from "../../../../../../contracts/user.contract";

@Component({
  selector: "app-header-user",
  templateUrl: "./header-user.component.html",
  styleUrls: ["./header-user.component.scss"]
})
export class HeaderUserComponent implements OnInit, OnDestroy {
  userId: number | null = null;
  currentUser: UserContract | null = null;
  private currentUserSubscription: Subscription | undefined;

  constructor(private authFacade: AuthFacade, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.authFacade.currentUser$.subscribe((user: UserContract | null) => {
      this.currentUser = user;
      this.userId = user ? user.id : null;
    });
  }

  onLogOutClicked(): void {
    this.authFacade.logout();
    this.router.navigate(["/store-home"]);
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
