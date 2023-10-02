import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { UserContract } from "../../../../contracts/user.contract";
import { FetchCurrentUserAuthHandler } from "../services/fetch-current-user-auth.handler";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private fetchCurrentUserAuthService: FetchCurrentUserAuthHandler, private router: Router) {
  }

  // TODO perhaps it is worth adding one field in the interface specifying whether a given user is an admin
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.fetchCurrentUserAuthService.definedUser$.pipe(
      map((currentUser: UserContract) => {
        if (currentUser && currentUser.name === "admin" && currentUser.login === "admin" && currentUser.password === "admin" && currentUser.email === "admin@admin.com") {
          return true;
        } else {
          this.router.navigate(["page-not-found"]);
          return false;
        }
      })
    );
  }
}
