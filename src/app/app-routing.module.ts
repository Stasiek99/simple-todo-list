import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./general/components/home/home.component";
import {PageNotFoundComponent} from "./general/components/page-not-found/page-not-found.component";
import {AdminComponent} from "./auth/components/admin/admin.component";
import {AdminGuard} from "./auth/guards/admin.guard";

export const routeConfig: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {
    path: "todolist/:userId",
    loadChildren: () => import("./todo-list/todo-list-routing.module").then((m) => m.TodoListRoutingModule)
  },
  {
    path: "users",
    loadChildren: () => import("./user/user-routing.module").then((m) => m.TodoListRoutingModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth-routing.module").then((m) => m.TodoListRoutingModule)
  },
  {
    path: "admin", canActivate: [AdminGuard], component: AdminComponent
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
