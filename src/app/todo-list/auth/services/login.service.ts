import {Injectable} from "@angular/core";

import {UserInterface} from "../../user/interfaces/user.interface";
import {UserService} from "../../user/services/user.service";
import {CurrentUserService} from "../../signup/services/current-user.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private userService: UserService, private currentUserService: CurrentUserService) {
  }

  login(login: string, password: string): boolean {
    let userList: UserInterface[] = [];
    this.userService.getUsers().subscribe(users => {
      userList = users;
    });
    const user = userList.find(user => user.login === login && user.password === password);

    if (user) {
      this.currentUserService.setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  }
}
