import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { SignupDialogComponent } from "../signup-dialog/signup-dialog.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],

})
export class SignupComponent {
  newUserForm: FormGroup = new FormGroup({
    "name": new FormControl(null, Validators.required),
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required),
    "confirmPassword": new FormControl(null, Validators.required),
    "email": new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(SignupDialogComponent, {
      width: "350px",
      height: "400px",
      enterAnimationDuration,
      exitAnimationDuration
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.redirectToTodoList();
      }
    });
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
