import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService } from "../../services/login.service";
import { CurrentUserService } from "../../../signup/services/current-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private loginService: LoginService, private currentUserService: CurrentUserService) {}

  onLogin(): void {
    const { login, password } = this.loginForm.value;
    const loginSuccessful: boolean = this.loginService.login(login, password);

    if (loginSuccessful) {
      const userId: string | null = this.currentUserService.getCurrentUserId();
      if(userId) {
        this.router.navigate(["/users", userId]);
      } else {
        console.log("Błąd przy pobieraniu identyfikatora użytkownika");
      }
    } else {
      console.log("Nieprawidłowy login lub hasło");
    }
  }
}
