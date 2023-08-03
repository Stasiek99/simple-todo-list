import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { SignupComponent } from "./signup/signup.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/todolist", pathMatch: "full"},
  {path: "/todolist", component: TodoListComponent},
  {path: "/signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
