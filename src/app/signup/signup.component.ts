import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  newUserForm: FormGroup = new FormGroup({
    "name": new FormControl(null, Validators.required),
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required),
    "confirmPassword": new FormControl(null, Validators.required),
    "email": new FormControl(null, Validators.required)
  });

  constructor(private router: Router) {}

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"])
  }
}
