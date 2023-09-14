import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TodoListComponent} from "./todo-list/todo-list/todo-list.component";
import {SignupComponent} from "./signup/components/signup/signup.component";
import {TodoListElementComponent} from "./todo-list/todo-list-element/todo-list-element.component";
import {UserDetailsComponent} from "./user/components/user-details/user-details.component";
import {UserListComponent} from "./user/components/user-list/user-list.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {HomeComponent} from "./general/components/home/home.component";
import {PageNotFoundComponent} from "./general/components/page-not-found/page-not-found.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {AdminComponent} from "./auth/components/admin/admin.component";
import {AdminGuard} from "./auth/guards/admin.guard";
import {HeaderUserComponent} from "./general/components/header/header-user/header-user.component";
import {HeaderNoUserComponent} from "./general/components/header/header-no-user/header-no-user.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {
    path: "todolist/:userId", canActivate: [AuthGuard],
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
  {
    path: "users",
    children: [
      {
        path: "", component: UserListComponent
      },
      {
        path: ":id", component: UserDetailsComponent
      }
    ]
  },
  {
    path: "auth",
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: "admin", canActivate: [AdminGuard], component: AdminComponent
  },
  {
    path: "headeruser", component: HeaderUserComponent
  },
  {
    path: "headernouser", component: HeaderNoUserComponent
  },
  {
    path: "**", redirectTo: "/page-not-found"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
