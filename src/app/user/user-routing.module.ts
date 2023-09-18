import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {UserListComponent} from "./components/user-list/user-list.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {AdminGuard} from "../auth/guards/admin.guard";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "", canActivate: [AdminGuard], component: UserListComponent
      },
      {
        path: ":id", component: UserDetailsComponent
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
export class UserRoutingModule {
}
