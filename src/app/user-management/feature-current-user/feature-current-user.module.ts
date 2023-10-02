import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CurrentUserDetailsComponent } from "./current-user-details/current-user-details.component";
import { UiUserDetailsModule } from "../shared/ui-user-details/ui-user-details.module";

@NgModule({
  declarations: [
    CurrentUserDetailsComponent
  ],
  imports: [
    CommonModule,
    UiUserDetailsModule
  ]
})
export class FeatureCurrentUserModule {
}
