import { Injectable } from "@angular/core";
import { UserInterface } from "../../user-management/data-access/_legacy/interfaces/user.interface";


@Injectable({
  providedIn: "root"
})
export class SignupService {
  // constructor(private userLocalStorageService: UserLocalStorageService, private currentUserService: CurrentUserService) {
  // }

  // todo implement similarly to AuthFacadeService.login()
  register(payload: UserInterface): string | null {
    throw new Error("Not implemented");
    return null;
    // const userId: string = this.generateId();
    // payload.approved = false;
    // const user: UserInterface = this.createUser(payload, userId);
    // this.userLocalStorageService.addUser(user);
    // this.currentUserService.setCurrentUser(user);
    // return userId;
  }

  private createUser(payload: UserInterface, userId: string): UserInterface {
    return {
      ...payload,
      id: userId
    };
  }

  private generateId(): string {
    return Date.now().toString();
  }
}
