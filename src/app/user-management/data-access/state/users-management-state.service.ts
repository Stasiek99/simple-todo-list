import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { UserContract } from "../../../../contracts/user.contract";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { DeepReadonly } from "../../../core/utils/deep-readonly.type";

interface UsersManagementState {
  selectedUser: UserContract | null;
  users: UserContract[] | null;
  selectedUserLoadingState: LoadingState;
  usersLoadingState: LoadingState;
}

const initialState: UsersManagementState = {
  selectedUser: null,
  users: null,
  selectedUserLoadingState: LoadingState.INIT,
  usersLoadingState: LoadingState.INIT
};

@Injectable({
  providedIn: "root"
})
export class UsersManagementStateService {

  private readonly store: BehaviorSubject<DeepReadonly<UsersManagementState>> = new BehaviorSubject<DeepReadonly<UsersManagementState>>(initialState);
  private readonly state$ = this.store.asObservable();

  readonly selectedUser$ = this.state$.pipe(map(state => state.selectedUser));
  readonly users$ = this.state$.pipe(map(state => state.users));
  readonly selectedUserLoadingState$ = this.state$.pipe(map(state => state.selectedUserLoadingState));
  readonly usersLoadingState$ = this.state$.pipe(map(state => state.usersLoadingState));

  setSelectedUserLoading(): void {
    this.setState({ selectedUserLoadingState: LoadingState.LOADING });
  }

  setUsersLoading(): void {
    this.setState({ usersLoadingState: LoadingState.LOADING });
  }

  setSelectedUserResult(user: UserContract | null, loadingState: LoadingState): void {
    this.setState({ selectedUser: user, selectedUserLoadingState: loadingState });
  }

  setUsersResult(users: UserContract[] | null, loadingState: LoadingState): void {
    this.setState({ users, usersLoadingState: loadingState });
  }

  private setState(newState: Partial<UsersManagementState>) {
    this.store.next({ ...this.store.getValue(), ...newState });
  }
}
