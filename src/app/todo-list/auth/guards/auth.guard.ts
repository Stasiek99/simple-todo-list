import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import {map, Observable} from "rxjs";

import {CurrentUserService} from "../../signup/services/current-user.service";
import {UserInterface} from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUserService.getCurrentUser().pipe(
      map((currentUser: UserInterface | null) => {
        if (currentUser && currentUser.approved) {
          return true;
        } else {
          this.router.navigate(["page-not-found"]);
          return false
        }
      })
    );
  }
}
