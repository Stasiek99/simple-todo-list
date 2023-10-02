import { Injectable } from "@angular/core";
import { filterNill } from "../../core/utils/is-defined.function";
import { EntityId } from "../../../contracts/utils/entity-id.type";
import { UserContract } from "../../../contracts/user.contract";
import { LoginAuthHandler } from "./services/login-auth.handler";
import { FetchCurrentUserAuthHandler } from "./services/fetch-current-user-auth.handler";

@Injectable({
  providedIn: "root"
})
export class AuthFacade {

  readonly userId$ = this.loginAuthService.userId$.pipe(filterNill<EntityId>());
  readonly currentUser$ = this.loginAuthService.currentUser$.pipe(filterNill<UserContract>());
  readonly loginCurrentUserLoadingState$ = this.loginAuthService.loginCurrentUserLoadingState$;
  readonly fetchCurrentUserLoadingState$ = this.fetchCurrentUserAuthService.fetchCurrentUserLoadingState$;

  constructor(private loginAuthService: LoginAuthHandler,
              private fetchCurrentUserAuthService: FetchCurrentUserAuthHandler) {
  }

  login(login: string, password: string): void {
    this.loginAuthService.login(login, password);
  }

  fetchCurrentUser(): void {
    this.fetchCurrentUserAuthService.fetchCurrentUserFromStorage();
  }

  logout(): void {
    throw new Error("Not implemented");
  }
}
