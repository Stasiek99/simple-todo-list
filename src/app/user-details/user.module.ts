import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";


import { UserDetailsComponent} from "./user-details.component";

@NgModule({
  declarations : [
    UserDetailsComponent
  ],
  imports: [
    MatButtonModule

  ],
  exports: [UserDetailsComponent]
})
export class UserModule {}
