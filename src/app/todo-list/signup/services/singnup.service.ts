import {Injectable} from "@angular/core";

import {UserInterface} from "../../user/interfaces/user.interface";
import {CurrentUserService} from "./current-user.service";
import {UserService} from "../../user/services/user.service";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private currentUserService: CurrentUserService, private userService: UserService) {
  }

  register(payload: UserInterface): string | null {
    const newUser: UserInterface = this.createUser(payload);
    this.userService.addUser(newUser).subscribe(addedUser => {
      console.log("Nowy użytkownik został dodany", addedUser);
    });
    this.currentUserService.setCurrentUser(newUser);
    return newUser.id;
  }

  private createUser(payload: UserInterface): UserInterface {
    return {
      id: payload.id,
      name: payload.name,
      login: payload.login,
      password: payload.password,
      email: payload.email,
      approved: false
    }
  }

  // private generateId(): string {
  //   return Date.now().toString()
  // }
}
