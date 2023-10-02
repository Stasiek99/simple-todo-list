import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthFacade } from "../../data-access";
import { filter, first, withLatestFrom } from "rxjs";
import { LoadingState } from "../../../core/utils/loading-state-enum";
import { isDefined } from "../../../core/utils/is-defined.function";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private authFacade: AuthFacade) {
  }

  onLogin(): void {
    const { login, password } = this.loginForm.value;
    this.authFacade.login(login, password);

    this.authFacade.loginCurrentUserLoadingState$.pipe(
      filter(loadingState => loadingState !== LoadingState.LOADING),
      withLatestFrom(this.authFacade.userId$),
      first())
      .subscribe(([loadingState, userId]) => {
        // debugger;
        if (loadingState === LoadingState.LOADED) {
          if (isDefined(userId)) {
            this.router.navigate(["/users/current-user"]);
          } else {
            console.log("Błąd przy pobieraniu identyfikatora użytkownika");
          }
        } else {
          console.log("Nieprawidłowy login lub hasło");
        }
      });

  }
}
