import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class GeneralModule {}
