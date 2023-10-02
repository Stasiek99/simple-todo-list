import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserContract } from "../../../../contracts/user.contract";
import { EntityId } from "../../../../contracts/utils/entity-id.type";
import { Observable } from "rxjs";
import { UserManagementFacade } from "../../data-access";

@Component({
  templateUrl: "./feature-user-details.component.html",
  styleUrls: ["./feature-user-details.component.scss"]
})
export class FeatureUserDetailsComponent {
  user$: Observable<UserContract> = this.authFacade.selectedUser$;

  constructor(private authFacade: UserManagementFacade, private router: Router) {
  }

  redirectToTodoList(userId: EntityId): void {
    this.router.navigate(["/todolist", userId]);
  }
}
