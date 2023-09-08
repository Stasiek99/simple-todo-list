import { Injectable } from '@angular/core';

import { UserId } from "../../signup/services/singnup.service";
import { UserInterface } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrentLocalStorageService {
  private readonly selectedUserKey: string = "selected_user_id"
  getCurrentUser(): UserId | null {
    const userId: string | null = window.localStorage.getItem(this.selectedUserKey);
    return userId ? userId : null;
  }

  setCurrentUserId(userId: UserId): void {
    window.localStorage.setItem(this.selectedUserKey, userId);
  }

  deleteCurrentUser(userToDelete: UserInterface): void {
    const currentUserId: string | null = this.getCurrentUser();
    if (userToDelete.id === currentUserId) {
      window.localStorage.removeItem(this.selectedUserKey);
    }
  }
}
