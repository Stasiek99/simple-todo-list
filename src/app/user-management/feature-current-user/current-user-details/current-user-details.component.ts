import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserContract } from "../../../../contracts/user.contract";
import { EntityId } from "../../../../contracts/utils/entity-id.type";
import { AuthFacade } from "../../../auth";


@Component({
  templateUrl: "./current-user-details.component.html",
  styleUrls: ["./current-user-details.component.scss"]
})
export class CurrentUserDetailsComponent {
  user$: Observable<UserContract> = this.authFacade.currentUser$;

  constructor(private authFacade: AuthFacade, private router: Router) {
  }

  redirectToTodoList(userId: EntityId): void {
    this.router.navigate(["/todolist", userId]);
  }
}
