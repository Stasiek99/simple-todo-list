import { Injectable } from "@angular/core";
import { AuthHttpService } from "../http/auth-http.service";
import { AuthStateService } from "../state/auth-state.service";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { AuthStorageService } from "../storage/auth-storage.service";
import { first } from "rxjs";
import { filterNill, isDefined } from "../../../core/utils/is-defined.function";
import { EntityId } from "../../../../contracts/utils/entity-id.type";

@Injectable({
  providedIn: "root"
})
export class FetchCurrentUserAuthHandler {

  readonly userId$ = this.authStateService.currentUserId$;
  readonly definedUser$ = this.authStateService.currentUser$.pipe(filterNill());
  readonly fetchCurrentUserLoadingState$ = this.authStateService.fetchCurrentUserLoadingState$;

  constructor(private authHttpService: AuthHttpService,
              private authStateService: AuthStateService,
              private authStorageService: AuthStorageService) {
  }

  fetchCurrentUserFromStorage(): void {
    const currentUserId = this.authStorageService.getCurrentUserId();
    if (!isDefined(currentUserId)) {
      this.authStateService.setFetchCurrentUserResult(null, LoadingState.ERROR);
    } else {
      this.fetchCurrentUser(Number(currentUserId));
    }
  }

  fetchCurrentUserFromStorageIfNoExistsInState(): void {
    this.userId$.pipe(first())
      .subscribe(userId => !isDefined(userId) ? this.fetchCurrentUserFromStorage() : null);
  }

  private fetchCurrentUser(currentUserId: EntityId): void {
    this.authStateService.setFetchCurrentUserLoading();
    this.authHttpService.getById(currentUserId)
      .pipe(first())
      .subscribe({
        next: (user) => {
          const userId = user?.id ?? null;
          this.authStateService.setFetchCurrentUserResult(user, LoadingState.LOADED);
          this.authStorageService.setCurrentUserId(String(userId));
        },
        error: () => {
          this.authStateService.setFetchCurrentUserResult(null, LoadingState.ERROR);
          this.authStorageService.removeCurrentUser();
        }
      });
  }
}
