import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  exports: [LoginComponent]
})
export class LoginModule {}
