import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { UserDetailsComponent } from "./user-details/user-details.component";


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatTableModule
  ],
  exports: [UserDetailsComponent]
})
export class UiUserDetailsModule {
}
