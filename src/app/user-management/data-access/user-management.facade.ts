import { Injectable } from "@angular/core";
import { EntityId } from "../../../contracts/utils/entity-id.type";
import { UserContract } from "../../../contracts/user.contract";
import { FetchSelectedUserUsersManagementHandler } from "./handlers/fetch-selected-user-users-management.handler";
import { FetchUsersUsersManagementHandler } from "./handlers/fetch-users-users-management.handler";
import { filterNill } from "../../core/utils/is-defined.function";

@Injectable({
  providedIn: "root"
})
export class UserManagementFacade {

  readonly selectedUser$ = this.fetchSelectedUserUsersManagementHandler.selectedUser$.pipe(filterNill<UserContract>());
  readonly users$ = this.usersUsersManagementHandler.users$;
  readonly selectedUserLoadingState$ = this.fetchSelectedUserUsersManagementHandler.selectedUserLoadingState$;
  readonly usersLoadingState$ = this.usersUsersManagementHandler.usersLoadingState$;

  constructor(private fetchSelectedUserUsersManagementHandler: FetchSelectedUserUsersManagementHandler,
              private usersUsersManagementHandler: FetchUsersUsersManagementHandler) {
  }

  fetchSelectedUser(userId: EntityId): void {
    this.fetchSelectedUserUsersManagementHandler.fetchSelectedUser(userId);
  }

  fetchUsers(): void {
    this.usersUsersManagementHandler.fetchUsers();
  }

  // TODO the current user can be the selected user
  setCurrentUserAsSelectedUser(user: UserContract): void {
    throw new Error(`Not Implemented yet`);
  }

  // TODO
  removeSelectedUser(userId: EntityId): void {
    throw new Error(`Not Implemented yet`);
  }

  // TODO
  approveSelectedUser(userId: EntityId): void {
    throw new Error(`Not Implemented yet`);
  }
}
