import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import { Observable } from "rxjs";

import { CurrentUserService } from "../../signup/services/current-user.service";
import { UserInterface } from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser: UserInterface | null = this.currentUserService.getCurrentUser();

    if (currentUser) {
      return true;
    } else {
      return this.router.createUrlTree(["/page-not-found"]);
    }
  }
}
