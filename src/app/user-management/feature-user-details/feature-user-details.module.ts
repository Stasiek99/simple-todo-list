import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureUserDetailsComponent } from "./feature-user-details/feature-user-details.component";
import { UiUserDetailsModule } from "../shared/ui-user-details/ui-user-details.module";

@NgModule({
  declarations: [
    FeatureUserDetailsComponent
  ],
  imports: [
    CommonModule,
    UiUserDetailsModule
  ]
})
export class FeatureUserDetailsModule {
}
