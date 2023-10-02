import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AuthFacade } from "../../../../../auth";
import { UserContract } from "../../../../../../contracts/user.contract";

@Component({
  selector: "app-store-header-user",
  templateUrl: "./store-header-user.component.html",
  styleUrls: ["./store-header-user.component.scss"]
})
export class StoreHeaderUserComponent implements OnInit, OnDestroy {
  itemsQuantity = 1;
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
