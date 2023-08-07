import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { TodoListComponent } from "./todo-list.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule {}
