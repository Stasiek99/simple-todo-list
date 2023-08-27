import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class GeneralModule {}
