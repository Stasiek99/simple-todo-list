import { Injectable } from '@angular/core';

import { UserInterface } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrentLocalStorageService {
  private readonly selectedUserKey: string = "selected_user_id"
  getCurrentUserId(): string | null {
    const userId: string | null = window.localStorage.getItem(this.selectedUserKey);
    return userId ? userId : null;
  }

  setCurrentUserId(userId: string): void {
    window.localStorage.setItem(this.selectedUserKey, userId);
  }

  deleteCurrentUser(userToDelete: UserInterface): void {
    const currentUserId: string | null = this.getCurrentUserId();
    if (userToDelete.id === currentUserId) {
      window.localStorage.removeItem(this.selectedUserKey);
    }
  }
}
