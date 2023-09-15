import {EventEmitter, Injectable} from "@angular/core";

import {UserInterface} from "../../user/interfaces/user.interface";
import {CurrentLocalStorageService} from "../../user/services/current-local-storage.service";
import {UserService} from "../../user/services/user.service";

@Injectable({
  providedIn: "root"
})

export class CurrentUserService {
  private userChanged = new EventEmitter<UserInterface | null>();

  constructor(private userService: UserService, private currentLocalStorageService: CurrentLocalStorageService) {
  }

  getCurrentUser(): UserInterface | null {
    const userId: string | null = this.getCurrentUserId();
    if (userId) {
      const users: UserInterface[] = this.userService.getUsers();
      const currentUser = this.findCurrentUser(users, userId);
      return currentUser ? {...currentUser} : null;
    }
    return null;
  }

  setCurrentUser(user: UserInterface | null): void {
    if (user) {
      this.currentLocalStorageService.setCurrentUserId(user.id);
    }
    this.userChanged.emit(user);
  }

  logout(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) this.currentLocalStorageService.deleteCurrentUser(currentUser);
    this.userChanged.emit(null);
  }

  getCurrentUserId(): string | null {
    return this.currentLocalStorageService.getCurrentUserId();
  }

  getUserChangedEmitter(): EventEmitter<UserInterface | null> {
    return this.userChanged;
  }

  private findCurrentUser(users: UserInterface[], userId: string): UserInterface | null {
    const user: UserInterface | undefined = users.find((user) => user.id === userId);
    return user || null;
  }

}
