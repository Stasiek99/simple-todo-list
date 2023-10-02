import {Injectable} from "@angular/core";

import {UserService} from "../../user/services/user.service";
import {CurrentUserService} from "../../signup/services/current-user.service";
import {Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private userService: UserService, private currentUserService: CurrentUserService) {
  }

  login(login: string, password: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      switchMap((users) => {
        const user = users.find(user => user.login === login && user.password === password);

        if (user) {
          this.currentUserService.setCurrentUser(user);
          return of(true);
        } else {
          return of(false);
        }
      })
    );

    // let userList: UserInterface[] = [];
    // this.userService.getUsers().subscribe(users => {
    //   userList = users;
    // });
    // const user = userList.find(user => user.login === login && user.password === password);
    //
    // if (user) {
    //   this.currentUserService.setCurrentUser(user);
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
