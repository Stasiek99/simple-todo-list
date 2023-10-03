import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { first, map, Observable, switchMap } from "rxjs";
import { filterLoadingState, LoadingState } from "../../../core/utils/loading-state-enum";
import { isDefined } from "../../../core/utils/is-defined.function";
import { AuthRoutePaths } from "../consts/auth-route-paths.enum";
import { FetchCurrentUserAuthHandler } from "../services/fetch-current-user-auth.handler";


@Injectable({
  providedIn: "root"
})
export class NoUserGuard implements CanActivate {

  constructor(private fetchCurrentUserAuthService: FetchCurrentUserAuthHandler, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    this.fetchCurrentUserAuthService.fetchCurrentUserFromStorageIfNoExistsInState();
    return this.fetchCurrentUserAuthService.fetchCurrentUserLoadingState$
      .pipe(
        filterLoadingState([LoadingState.LOADED, LoadingState.ERROR]),
        switchMap(() => this.fetchCurrentUserAuthService.userId$),
        map(isCurrentUser => {
          // debugger;
          return isDefined(isCurrentUser) ? this.router.createUrlTree(["/", AuthRoutePaths.home]) : true;
        }),
        first());
  }
}
