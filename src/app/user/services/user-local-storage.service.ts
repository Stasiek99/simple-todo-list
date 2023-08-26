import { Injectable } from "@angular/core";

import { UserInterface } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  private readonly userStorageItemKey: string = "users_list";

  private getUserList(): UserInterface[] {
    const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : [];
  }

  private setUserList(userList: UserInterface[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(userList));
  }

  addUser(user: UserInterface): void {
    const userList = this.getUserList();
    userList.push(user);
    this.setUserList(userList);
  }

  // setSuperSelectedUser(userId: string): void {
  //   this.selectedUserid = userId;
  //   // this.selectedUserid = userId;
  // }

  getUsers(): UserInterface[] {
    return this.getUserList();
  }

  deleteUser(userToDelete: UserInterface): void {
    const userList = this.getUserList();
    const updatedList = userList.filter(user => user !== userToDelete);
    this.setUserList(updatedList);
  }

  editUser(editedUser: UserInterface): void {
    const userList = this.getUserList();
    const index = userList.findIndex(user => user.id === editedUser.id);
    if (index !== -1) {
      userList[index] = editedUser;
      this.setUserList(userList);
    }
  }
}
