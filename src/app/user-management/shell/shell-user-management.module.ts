import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureUserDetailsModule } from "../feature-user-details/feature-user-details.module";
import {
  FeatureUserDetailsComponent
} from "../feature-user-details/feature-user-details/feature-user-details.component";
import { FeatureCurrentUserModule } from "../feature-current-user/feature-current-user.module";
import {
  CurrentUserDetailsComponent
} from "../feature-current-user/current-user-details/current-user-details.component";
import { AdminGuard } from "../../auth";
import { FeatureUserListComponent } from "../feature-user-list/feature-user-list/feature-user-list.component";
import { FeatureUserListModule } from "../feature-user-list/feature-user-list.module";


const routes: Routes = [
  {
    path: "current-user",
    pathMatch: "full",
    component: CurrentUserDetailsComponent
  },
  {
    path: "",
    canActivate: [AdminGuard],
    children: [
      {
        path: "", component: FeatureUserListComponent
      },
      {
        path: ":userId", component: FeatureUserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    FeatureUserDetailsModule,
    FeatureCurrentUserModule,
    FeatureUserListModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShellUserManagementModule {
}
