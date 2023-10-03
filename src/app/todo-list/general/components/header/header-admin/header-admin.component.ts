import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserInterface } from "../../../../../user-management/data-access/_legacy/interfaces/user.interface";
import { CurrentUserService } from "../../../../signup/services/current-user.service";


@Component({
  selector: "app-header-admin",
  templateUrl: "./header-admin.component.html",
  styleUrls: ["./header-admin.component.scss"]
})
export class HeaderAdminComponent implements OnInit, OnDestroy {
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
    this.router.navigate(["/store-home"]);
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
