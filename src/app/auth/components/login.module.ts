import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [LoginComponent, AdminComponent],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  exports: [LoginComponent]
})
export class LoginModule {}
