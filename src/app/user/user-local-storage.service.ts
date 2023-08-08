import { Injectable } from "@angular/core";

import { UserInterface } from "./interfaces/user.interface";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  private readonly userStorageItemKey = "users_list";
  private selectedUserid: string | null = null;
  selectedUserId: string = "";

  private getUserList(): UserInterface[] {
    const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : [];
  }

  private setUserList(userList: UserInterface[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(userList));
  }

  addUser(user: UserInterface): void {
    const userList = this.getUserList();
    user.id = userList.length.toString();
    userList.push(user);
    this.selectedUserId = (userList.length -1).toString();
    this.setUserList(userList);
  }

  getUser(userId: string): UserInterface | null {
    const userList = this.getUserList();
    const user = userList.find(user => user.id === userId);
    return user || null;
  }

  setSelectedUser(userId: string): void {
    this.selectedUserid = userId;
  }

  getSelectedUser(): UserInterface | null {
    return this.selectedUserid ? this.getUser(this.selectedUserid) : null
  }

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

  // addUser(userValues: UserInterface[]): void {
  //   window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(userValues));
  // }
  //
  // getUsers(): UserInterface[] | null {
  //   const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
  //   return objectToParse ? JSON.parse(objectToParse) : null
  // }
  //
  // deleteLastAddedUser(newList: UserInterface[]): void {
  //   window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(newList));
  // }
  //
  // editLastAddedUser(editedUser: UserInterface[]): void  {
  //   window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(editedUser));
  // }
}
