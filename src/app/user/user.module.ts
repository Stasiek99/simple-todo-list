import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";

import { UserDetailsComponent} from "./components/user-details/user-details.component";
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations : [
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatTableModule
  ],
  exports: [UserDetailsComponent]
})
export class UserModule {}
