import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SignupDialogComponent } from "../signup-dialog/signup-dialog.component";
import { SignupSnackbarComponent } from "../signup-snackbar/signup-snackbar.component";
import { UserLocalStorageService } from "../../../user/user-local-storage.service";

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

  durationInSeconds: number = 5;
  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar, private userService: UserLocalStorageService) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(SignupDialogComponent, {
      width: "350px",
      height: "400px",
      enterAnimationDuration,
      exitAnimationDuration
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.addUser(this.newUserForm.value)
        this.openSnackBar();
        this.redirectToTodoList();
      }
    });
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(SignupSnackbarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  redirectToTodoList(): void {
    this.router.navigate(["/", "todolist"]);
  }
}
