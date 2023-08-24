import { Injectable } from '@angular/core';

import { UserId } from "../signup/components/services/singnup.service";

@Injectable({
  providedIn: 'root'
})
export class CurrentLocalStorageService {
  private readonly selectedUserKey: string = "selected_user_id"
  getCurrentUser(): UserId | null {
    const userId = window.localStorage.getItem(this.selectedUserKey);
    return userId ? userId : null;
  }

  setCurrentUserId(userId: UserId): void {
    window.localStorage.setItem(this.selectedUserKey, userId)
  }
}
