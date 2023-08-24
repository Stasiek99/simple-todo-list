//
// // user , component views
//
//
//
// // local storage
// // user list
// // current user id
//
// // target -> User
//
// //
// import {User, UserId, UsersLocalStorage} from "./singnup.service";
//
// interface User2 {
//   id: string;
//   name:string;
// }
//
// // login process
//
// // login + password => zalexxc uzytkownika
// // zabrac z tego uzytkownika user.id
// // zapisac to user.id w localstorage pod kluczen current_user
// // redirect na currentuserpagecomponent
// // currentuserpagecomponent ngoninit pobiera CurrentUserService.getCurrentUser():User
//
//
//
// export class CurrentLocalStorage {
//
//   getCurrentuser():UserId {
//     return 'asdasdsad'
//   }
//
//   setCurrentUserId(userId:UserId):void {
//
//   }
// }
//
// class CurrentUserService {
//
//   constructor(
//     private usersLocalStorage: UsersLocalStorage,
//     private currentLocalStorage: CurrentLocalStorage) {
//   }
//
//   getCurrentUser():User {
//     const users: User[] = this.usersLocalStorage.getUsers();
//     const userId: UserId = this.currentLocalStorage.getCurrentuser()
//     const user = this.findCurrentUser(users,userId);
//     return user;
//   }
//
//   private findCurrentUser(users:User[],userId:UserId):User{
//     return users.find(user => user.id === userId) as User;
//   }
// }


import { Injectable } from "@angular/core";

import { UserInterface } from "../../../user/interfaces/user.interface";
import { UserLocalStorageService } from "../../../user/user-local-storage.service";
import { CurrentLocalStorageService } from "../../../user/current-local-storage.service";
import { UserId } from "./singnup.service";

@Injectable({
  providedIn: "root"
})

export class CurrentUserService {
  constructor(private userLocalStorageService: UserLocalStorageService, private currentLocalStorageService: CurrentLocalStorageService) {}

  getCurrentUser(): UserInterface | null {
    const userId = this.currentLocalStorageService.getCurrentUser();
    if (userId) {
      const users: UserInterface[] = this.userLocalStorageService.getUsers();
      return this.findCurrentUser(users, userId);
    }
    return null;
  }

  private findCurrentUser(users: UserInterface[], userId: UserId): UserInterface | null{
    const user: UserInterface | undefined = users.find((user) => user.id === userId);
    return user || null;
  }

}
