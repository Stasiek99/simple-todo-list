import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class AuthStorageService {
  private readonly selectedUserKey: string = "current_user_id";

  getCurrentUserId(): string | null {
    return window.localStorage.getItem(this.selectedUserKey);
  }

  setCurrentUserId(userId: string | null): void {
    if (userId) {
      window.localStorage.setItem(this.selectedUserKey, userId);
    } else {
      this.removeCurrentUser();
    }
  }

  removeCurrentUser(): void {
    window.localStorage.removeItem(this.selectedUserKey);
  }
}
