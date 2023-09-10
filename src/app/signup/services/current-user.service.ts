import { Injectable } from "@angular/core";

import { UserInterface } from "../../user/interfaces/user.interface";
import { CurrentLocalStorageService } from "../../user/services/current-local-storage.service";
import { UserService } from "../../user/services/user.service";

@Injectable({
  providedIn: "root"
})

export class CurrentUserService {
  constructor(private userService: UserService, private currentLocalStorageService: CurrentLocalStorageService) {}

  getCurrentUser(): UserInterface | null {
    const userId: string | null = this.currentLocalStorageService.getCurrentUser();
    if (userId) {
      const users: UserInterface[] = this.userService.getUsers();
      return this.findCurrentUser(users, userId);
    }
    return null;
  }

  private findCurrentUser(users: UserInterface[], userId: string): UserInterface | null{
    const user: UserInterface | undefined = users.find((user) => user.id === userId);
    return user || null;
  }

}
