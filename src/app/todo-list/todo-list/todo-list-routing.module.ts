import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListElementComponent } from "./todo-list-element/todo-list-element.component";
import { AuthGuard } from "../../auth/data-access/guards/auth.guard";
import { TodoListGuard } from "./guards/todo-list.guard";
import { todoListOwner } from "./consts/todo-list-owner.const";

const routes: Routes = [
  {
    path: `:${todoListOwner}`,
    canActivate: [AuthGuard, TodoListGuard],
    // TODO  fetch selecteduser from url param if not exist in state (impl in component)
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
  }
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
