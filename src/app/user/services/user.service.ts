import {Injectable} from '@angular/core';

import {UserLocalStorageService} from "./user-local-storage.service";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userLocalStorageService: UserLocalStorageService) {
  }

  getUsers(): UserInterface[] {
    return [...this.userLocalStorageService.getUsers()];
  }

  getUserById(userId: string): UserInterface | null {
    return this.userLocalStorageService.getUserById(userId);
  }

  deleteUser(userToDelete: UserInterface): void {
    this.userLocalStorageService.deleteUser(userToDelete);
  }
}
