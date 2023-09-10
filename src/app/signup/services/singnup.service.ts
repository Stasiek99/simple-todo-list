import { Injectable } from "@angular/core";

import { UserInterface } from "../../user/interfaces/user.interface";
import { UserLocalStorageService}  from "../../user/services/user-local-storage.service";
import { CurrentLocalStorageService } from "../../user/services/current-local-storage.service";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private userLocalStorageService: UserLocalStorageService, private currentLocalStorageService: CurrentLocalStorageService) {
   }
   register(payload: UserInterface): string | null {
    const userId: string = this.generateId();
    payload.approved = false;
    const user: UserInterface = this.createUser(payload, userId);
    this.userLocalStorageService.addUser(user);
    this.currentLocalStorageService.setCurrentUserId(userId);
    return userId;
  }

  private createUser(payload: UserInterface, userId: string): UserInterface {
    return {
      ...payload,
      id: userId
    }
  }

  private generateId(): string {
    return Date.now().toString()
  }
}
