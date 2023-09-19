import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";

import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from './components/admin/admin.component';

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
export class AuthModule {
}
