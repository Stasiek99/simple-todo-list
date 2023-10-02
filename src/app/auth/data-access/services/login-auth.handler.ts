import { Injectable } from "@angular/core";
import { AuthHttpService } from "../http/auth-http.service";
import { AuthStateService } from "../state/auth-state.service";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { AuthStorageService } from "../storage/auth-storage.service";
import { first, of, switchMap, throwError } from "rxjs";
import { isDefined } from "../../../core/utils/is-defined.function";

@Injectable({
  providedIn: "root"
})
export class LoginAuthHandler {

  readonly userId$ = this.authStateService.currentUserId$;
  readonly currentUser$ = this.authStateService.currentUser$;
  readonly loginCurrentUserLoadingState$ = this.authStateService.loginCurrentUserLoadingState$;

  constructor(private authHttpService: AuthHttpService,
              private authStateService: AuthStateService,
              private authStorageService: AuthStorageService) {
  }

  login(login: string, password: string): void {
    this.authStateService.setLoginCurrentUserLoading();
    this.authHttpService.getFirst({ login, password })

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
          const userId = user?.id ?? null;
          this.authStateService.setLoginCurrentUserResult(user, LoadingState.LOADED);
          this.authStorageService.setCurrentUserId(String(userId));
        },
        error: () => {
          this.authStateService.setLoginCurrentUserResult(null, LoadingState.ERROR);
          this.authStorageService.removeCurrentUser();
        }
      });
  }
}
