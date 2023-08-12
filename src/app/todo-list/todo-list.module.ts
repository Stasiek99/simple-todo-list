import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListElementComponent
  ],
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
