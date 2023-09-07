import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from "@angular/material/table";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    NgIf
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
