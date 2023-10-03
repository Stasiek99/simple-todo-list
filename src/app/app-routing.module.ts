import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./todo-list/general/components/home/home.component";
import { PageNotFoundComponent } from "./todo-list/general/components/page-not-found/page-not-found.component";
import { AdminComponent } from "./todo-list/auth/components/admin/admin.component";
import { AdminGuard } from "./auth/data-access/guards/admin.guard";
import { UnapprovedUserComponent } from "./todo-list/signup/components/unapproved-user/unapproved-user.component";
import {
  StoreHeaderUserComponent
} from "./web-store/general/components/store-header/store-header-user/store-header-user.component";
import {
  StoreHeaderNoUserComponent
} from "./web-store/general/components/store-header/store-header-no-user/store-header-no-user.component";
import {
  StoreHeaderAdminComponent
} from "./web-store/general/components/store-header/store-header-admin/store-header-admin.component";
import { StoreHomeComponent } from "./web-store/general/components/store-home/store-home.component";
import { NoUserGuard, UserGuard } from "./auth";

const authenticationRoutes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    canActivate: [UserGuard],
    children: [
      { path: "unapproved", component: UnapprovedUserComponent },
      { path: "storeheader", component: StoreHeaderUserComponent },
      { path: "storeheaderno", component: StoreHeaderNoUserComponent },
      { path: "storeheaderadmin", component: StoreHeaderAdminComponent },
      { path: "store", component: StoreHomeComponent },
      {
        path: "todolist",
        loadChildren: () => import("./todo-list/todo-list/todo-list-routing.module").then((m) => m.TodoListRoutingModule)
      },

      {
        path: "admin", canActivate: [AdminGuard], component: AdminComponent
      }
    ]
  }
];

const noAuthenticationRoutes: Routes = [
  // TODO what the default path will be after logging in, one more view will be needed  (related with AuthRoutePaths.home)
  { path: "store-home", canActivate: [], component: HomeComponent },
  {
    path: "auth",
    canActivate: [NoUserGuard],
    loadChildren: () => import("./auth/shell/shell-auth.module").then((m) => m.ShellAuthModule)
  }
];

export const routeConfig: Routes = [
  { path: "", redirectTo: "store-home", pathMatch: "full" },
  {
    path: "users",
    canActivate: [UserGuard],
    loadChildren: () => import("./user-management/shell/shell-user-management.module").then((m) => m.ShellUserManagementModule)
  },
  ...authenticationRoutes, ...noAuthenticationRoutes,
  { path: "page-not-found", component: PageNotFoundComponent },
  {
    path: "**", redirectTo: "/page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig, { enableTracing: true }), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
