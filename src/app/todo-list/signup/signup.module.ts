import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { SignupComponent } from "./components/signup/signup.component";
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { SignupSnackbarComponent } from './components/signup-snackbar/signup-snackbar.component';
import { UnapprovedUserComponent } from './components/unapproved-user/unapproved-user.component';

@NgModule({
  declarations: [SignupComponent, SignupDialogComponent, SignupSnackbarComponent, UnapprovedUserComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [SignupComponent]
})
export class SignupModule {}
