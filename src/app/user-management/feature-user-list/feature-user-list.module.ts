import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { FeatureUserListComponent } from "./feature-user-list/feature-user-list.component";


@NgModule({
  declarations: [
    FeatureUserListComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatTableModule
  ]
})
export class FeatureUserListModule {
}
