import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { UserInterface } from "../../../user-management/data-access/_legacy/interfaces/user.interface";
import { UserService } from "../../../user-management/data-access/_legacy/services/user.service";
import {
  CurrentLocalStorageService
} from "../../../user-management/data-access/_legacy/services/current-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class CurrentUserService {
  currentUserSubject = new BehaviorSubject<UserInterface | null>(null);

  constructor(private userService: UserService, private currentLocalStorageService: CurrentLocalStorageService) {
    const userId: string | null = this.getCurrentUserId();
    if (userId) this.setCurrentUserById(userId);
  }

  getCurrentUser(): Observable<UserInterface | null> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: UserInterface | null): void {
    if (user) {
      this.currentLocalStorageService.setCurrentUserId(user.id);
      this.currentUserSubject.next(user);
    }
  }

  logout(): void {
    this.currentLocalStorageService.deleteCurrentUser();
    this.currentUserSubject.next(null);
  }

  getCurrentUserId(): string | null {
    return this.currentLocalStorageService.getCurrentUserId();
  }

  setCurrentUserById(userId: string): void {
    const users: UserInterface[] = this.userService.getUsers();
    const currentUser = users.find(user => user.id === userId) || null;
    this.currentUserSubject.next(currentUser);
  }
}
