import { Injectable } from "@angular/core";

// TODO replace CurrentLocalStorageService with A AuthStorageService
@Injectable({
  providedIn: "root"
})
export class CurrentLocalStorageService {
  private readonly selectedUserKey: string = "selected_user_id";

  getCurrentUserId(): string | null {
    const userId: string | null = window.localStorage.getItem(this.selectedUserKey);
    return userId ? userId : null;
  }

  setCurrentUserId(userId: string): void {
    window.localStorage.setItem(this.selectedUserKey, userId);
  }

  deleteCurrentUser(): void {
    window.localStorage.removeItem(this.selectedUserKey);
  }
}
