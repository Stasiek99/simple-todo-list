import { Injectable } from "@angular/core";

import { UserInterface } from "../interfaces/user.interface";
import { CurrentLocalStorageService } from "./current-local-storage.service";


// TODO to removed, the data will be returned from the server
@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  private readonly userStorageItemKey: string = "users_list";

  constructor(private currentLocalStorageService: CurrentLocalStorageService) {
  }

  private getUserList(): UserInterface[] {
    const objectToParse: string | null = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : [];
  }

  private setUserList(userList: UserInterface[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(userList));
  }

  addUser(user: UserInterface): void {
    const userList: UserInterface[] = this.getUserList();
    const updatedUserList = [...userList, user];
    this.setUserList(updatedUserList);
  }

  getUsers(): UserInterface[] {
    return [...this.getUserList()];
  }

  getUserById(userId: string): UserInterface | null {
    const userList = this.getUserList();
    const user = userList.find(user => user.id === userId);
    return user || null;
  }

  deleteUser(userToDelete: UserInterface): void {
    const userList = this.getUserList();
    const updatedList = userList.filter(user => user.id !== userToDelete.id);
    this.setUserList(updatedList);
    this.currentLocalStorageService.deleteCurrentUser();
  }

  approveUser(userToApprove: UserInterface): void {
    const userList: UserInterface[] = this.getUserList();
    const index = userList.findIndex(user => user.id === userToApprove.id);
    if (index !== -1) {
      userToApprove.approved = true;
      userList[index] = userToApprove;
      this.setUserList(userList);
    }
  }
}
