import { Injectable } from "@angular/core";
import { UsersManagementHttpService } from "../http/users-management-http.service";
import { UsersManagementStateService } from "../state/users-management-state.service";
import { first, of, switchMap, throwError } from "rxjs";
import { EntityId } from "../../../../contracts/utils/entity-id.type";
import { isDefined } from "../../../core/utils/is-defined.function";
import { LoadingState } from "../../../core/utils/loading-state-enum";

@Injectable({
  providedIn: "root"
})
export class FetchSelectedUserUsersManagementHandler {

  readonly selectedUser$ = this.authStateService.selectedUser$;
  readonly selectedUserLoadingState$ = this.authStateService.selectedUserLoadingState$;

  constructor(private authHttpService: UsersManagementHttpService,
              private authStateService: UsersManagementStateService) {
  }

  fetchSelectedUser(userId: EntityId): void {
    this.authStateService.setSelectedUserLoading();
    this.authHttpService.getById(userId)
      .pipe(
        switchMap((user) =>
          isDefined(user) ?
            of(user)
            : throwError(() => new Error("User No exists"))
        ),
        first()
      )
      .subscribe({
        next: (user) => {
          this.authStateService.setSelectedUserResult(user, LoadingState.LOADED);
        },
        error: () => {
          this.authStateService.setSelectedUserResult(null, LoadingState.ERROR);
        }
      });
  }
}
