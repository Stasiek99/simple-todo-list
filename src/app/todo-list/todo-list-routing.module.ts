import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../auth/guards/auth.guard";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoListElementComponent} from "./todo-list-element/todo-list-element.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: TodoListComponent
      },
      {
        path: "todo/:todoId",
        component: TodoListElementComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoListRoutingModule {
}
