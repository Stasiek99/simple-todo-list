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
    const userId: string | null = this.getCurrentUserId();
    if (userId) {
      const users: UserInterface[] = this.userService.getUsers();
      const currentUser = this.findCurrentUser(users, userId);
      return currentUser ? {...currentUser} : null;
    }
    return null;
  }

  getCurrentUserId(): string | null {
    return this.currentLocalStorageService.getCurrentUserId();
  }

  private findCurrentUser(users: UserInterface[], userId: string): UserInterface | null{
    const user: UserInterface | undefined = users.find((user) => user.id === userId);
    return user || null;
  }

}
