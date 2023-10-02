import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AdminComponent } from "./components/admin/admin.component";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    NgIf
  ]
})
export class TodoListAuthModule {
}
