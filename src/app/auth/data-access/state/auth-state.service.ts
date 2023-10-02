import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { DeepReadonly } from "../../../core/utils/deep-readonly.type";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { UserContract } from "../../../../contracts/user.contract";

interface AuthState {
  currentUser: UserContract | null;
  // TODO analyze whether we want to have a separate loading state,
  //  is it related to a resource or to a specific action
  loginCurrentUserLoadingState: LoadingState;
  fetchCurrentUserLoadingState: LoadingState;
}

const initialState: AuthState = {
  currentUser: null,
  loginCurrentUserLoadingState: LoadingState.INIT,
  fetchCurrentUserLoadingState: LoadingState.INIT
};


@Injectable({
  providedIn: "root"
})
export class AuthStateService {

  private readonly store: BehaviorSubject<DeepReadonly<AuthState>> = new BehaviorSubject<DeepReadonly<AuthState>>(initialState);
  private readonly state$ = this.store.asObservable();

  readonly currentUser$ = this.state$.pipe(map(state => state.currentUser));
  readonly currentUserId$ = this.currentUser$.pipe(map(user => user?.id ?? null));
  readonly loginCurrentUserLoadingState$ = this.state$.pipe(map(state => state.loginCurrentUserLoadingState));
  readonly fetchCurrentUserLoadingState$ = this.state$.pipe(map(state => state.fetchCurrentUserLoadingState));

  setLoginCurrentUserLoading(): void {
    this.setState({ loginCurrentUserLoadingState: LoadingState.LOADING });
  }

  setFetchCurrentUserLoading(): void {
    this.setState({ fetchCurrentUserLoadingState: LoadingState.LOADING });
  }

  setLoginCurrentUserResult(user: UserContract | null, loadingState: LoadingState): void {
    this.setState({ currentUser: user, loginCurrentUserLoadingState: loadingState });
  }

  setFetchCurrentUserResult(user: UserContract | null, loadingState: LoadingState): void {
    this.setState({ currentUser: user, fetchCurrentUserLoadingState: loadingState });
  }

  private setState(newState: Partial<AuthState>) {
    this.store.next({ ...this.store.getValue(), ...newState });
  }
}
