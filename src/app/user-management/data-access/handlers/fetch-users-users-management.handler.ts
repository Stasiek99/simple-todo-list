import { Injectable } from "@angular/core";
import { UsersManagementHttpService } from "../http/users-management-http.service";
import { UsersManagementStateService } from "../state/users-management-state.service";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { first } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchUsersUsersManagementHandler {

  readonly users$ = this.authStateService.users$;
  readonly usersLoadingState$ = this.authStateService.usersLoadingState$;

  constructor(private authHttpService: UsersManagementHttpService,
              private authStateService: UsersManagementStateService) {
  }

  fetchUsers(): void {
    this.authStateService.setUsersLoading();
    this.authHttpService.getAll()
      .pipe(first())
      .subscribe({
        next: (users) => {
          this.authStateService.setUsersResult(users, LoadingState.LOADED);
        },
        error: () => {
          this.authStateService.setUsersResult(null, LoadingState.ERROR);
        }
      });
  }
}
