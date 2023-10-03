import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SignupComponent } from "./signup/signup.component";
import { SignupDialogComponent } from "./signup-dialog/signup-dialog.component";
import { SignupSnackbarComponent } from "./signup-snackbar/signup-snackbar.component";


@NgModule({
  declarations: [SignupComponent, SignupDialogComponent, SignupSnackbarComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [SignupComponent]
})
export class FeatureSignupModule {
}
