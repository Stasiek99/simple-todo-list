import { Injectable } from "@angular/core";

import { UserLocalStorageService } from "./user-local-storage.service";
import { UserInterface } from "../interfaces/user.interface";
import { UserContract } from "../../../../../contracts/user.contract";


// TODO replace userService with A UserManagementFacade
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private userLocalStorageService: UserLocalStorageService) {
  }

  getUsers(): UserInterface[] {
    throw new Error("Not Implemented");
    // return [...this.userLocalStorageService.getUsers()];
  }


  getUserById(userId: string): UserInterface | null {
    throw new Error("Not Implemented");
    // return this.userLocalStorageService.getUserById(userId) as UserContract;
  }

  getUserById2(userId: string): UserContract | null {
    throw new Error("Not Implemented");
    // return this.userLocalStorageService.getUserById(userId) as UserContract;
  }

  deleteUser(userToDelete: UserInterface): void {
    throw new Error("Not Implemented");
    // this.userLocalStorageService.deleteUser(userToDelete);
  }

  approveUser(user: UserInterface): void {
    throw new Error("Not Implemented");
    // this.userLocalStorageService.approveUser(user);
  }
}
