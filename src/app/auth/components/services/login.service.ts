import { Injectable } from "@angular/core";

import { UserLocalStorageService } from "../../../user/services/user-local-storage.service";
import { UserInterface } from "../../../user/interfaces/user.interface";
import { CurrentLocalStorageService } from "../../../user/services/current-local-storage.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private userLocalStorageService: UserLocalStorageService,private currentLocalStorageService: CurrentLocalStorageService) {}

  login(login: string, password: string): boolean {
    const userList: UserInterface[] = this.userLocalStorageService.getUsers();
    const user = userList.find(user => user.login === login && user.password === password);

    if (user) {
      this.currentLocalStorageService.setCurrentUserId(user.id);
      return true;
    } else {
      return false;
    }
  }
}
