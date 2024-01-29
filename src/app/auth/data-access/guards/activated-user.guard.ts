import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { UserContract } from "../../../../contracts/user.contract";
import { AuthFacade } from "../auth.facade";

@Injectable({
  providedIn: "root"
})
export class ActivatedUserGuard implements CanActivate {
  constructor(private currentUserService: AuthFacade, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUserService.currentUser$.pipe(
      map((currentUser: UserContract | null) => {
        if (currentUser && currentUser.approved) {
          return true;
        } else {
          this.router.navigate(["page-not-found"]);
          return false;
        }
      })
    );
  }
}
