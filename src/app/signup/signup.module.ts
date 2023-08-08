import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { SignupComponent } from "./components/signup/signup.component";
import { MatButtonModule } from "@angular/material/button";
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [SignupComponent, SignupDialogComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [SignupComponent]
})
export class SignupModule {}
