import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { SignupComponent } from "./signup.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [SignupComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [SignupComponent]
})
export class SignupModule {}
