import { Injectable } from "@angular/core";

import { UserInterface } from "../../user/interfaces/user.interface";
import { UserLocalStorageService}  from "../../user/services/user-local-storage.service";
import { CurrentLocalStorageService } from "../../user/services/current-local-storage.service";

export type UserId = string

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private userLocalStorageService: UserLocalStorageService, private currentLocalStorageService: CurrentLocalStorageService) {
   }
   register(payload: UserInterface): UserId | null {
    const userId: string = this.generateId();
    const user: UserInterface = this.createUser(payload, userId);
    this.userLocalStorageService.addUser(user);
    this.currentLocalStorageService.setCurrentUserId(userId);
    return userId;
  }

  private createUser(payload: UserInterface, userId: UserId): UserInterface {
    return {
      ...payload,
      id: userId
    }
  }

  private generateId(): UserId {
    return Date.now().toString()
  }
}
