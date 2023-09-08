import { Injectable } from "@angular/core";

import { UserInterface } from "../../user/interfaces/user.interface";
import { CurrentLocalStorageService } from "../../user/services/current-local-storage.service";
import { UserService } from "../../user/services/user.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private userService: UserService, private currentLocalStorageService: CurrentLocalStorageService) {}

  login(login: string, password: string): boolean {
    const userList: UserInterface[] = this.userService.getUsers();
    const user = userList.find(user => user.login === login && user.password === password);

    if (user) {
      this.currentLocalStorageService.setCurrentUserId(user.id);
      return true;
    } else {
      return false;
    }
  }
}
