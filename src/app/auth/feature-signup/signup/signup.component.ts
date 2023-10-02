import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SignupDialogComponent } from "../signup-dialog/signup-dialog.component";
import { SignupSnackbarComponent } from "../signup-snackbar/signup-snackbar.component";
import { SignupService } from "../singnup.service";
import { UserInterface } from "../../../user-management/data-access/_legacy/interfaces/user.interface";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent {
  newUserForm: FormGroup = new FormGroup({
    "name": new FormControl(null, Validators.required),
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required),
    "confirmPassword": new FormControl(null, Validators.required),
    "email": new FormControl(null, Validators.required)
  });

  durationInSeconds: number = 2;

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar, private signupService: SignupService) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(SignupDialogComponent, {
      width: "350px",
      height: "400px",
      enterAnimationDuration,
      exitAnimationDuration
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSubmit(this.newUserForm.value);
        this.openSnackBar();
      }
    });
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(SignupSnackbarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  onSubmit(payload: UserInterface): void {
    const userId: string | null = this.signupService.register(payload);
    if (userId) {
      // TODO we don't need this when creating a todo item we will attach a user to it
      // this.todoListService.initializeUserTodos(userId);
      this.router.navigate([`unapproved`]);
    } else {
      console.log("Kolego, coś poszło nie tak");
    }
  }
}
