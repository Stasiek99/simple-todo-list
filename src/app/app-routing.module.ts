import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./todo-list/general/components/home/home.component";
import {PageNotFoundComponent} from "./todo-list/general/components/page-not-found/page-not-found.component";
import {AdminComponent} from "./todo-list/auth/components/admin/admin.component";
import {AdminGuard} from "./todo-list/auth/guards/admin.guard";
import {UnapprovedUserComponent} from "./todo-list/signup/components/unapproved-user/unapproved-user.component";
import {StoreHeaderUserComponent} from "./web-store/general/components/store-header/store-header-user/store-header-user.component";
import {StoreHeaderNoUserComponent} from "./web-store/general/components/store-header/store-header-no-user/store-header-no-user.component";
import {StoreHeaderAdminComponent} from "./web-store/general/components/store-header/store-header-admin/store-header-admin.component";
import {StoreHomeComponent} from "./web-store/general/components/store-home/store-home.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "store-home", pathMatch: "full"},
  {path: "store-home", component: HomeComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {path: "unapproved", component: UnapprovedUserComponent},
  {path: "storeheader", component: StoreHeaderUserComponent},
  {path: "storeheaderno", component: StoreHeaderNoUserComponent},
  {path: "storeheaderadmin", component: StoreHeaderAdminComponent},
  {path: "store", component: StoreHomeComponent},
  {
    path: "todolist/:userId",
    loadChildren: () => import("./todo-list/todo-list/todo-list-routing.module").then((m) => m.TodoListRoutingModule)
  },
  {
    path: "users",
    loadChildren: () => import("./todo-list/user/user-routing.module").then((m) => m.UserRoutingModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./todo-list/auth/auth-routing.module").then((m) => m.AuthRoutingModule)
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
