import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent} from "./components/home/home.component";
import { PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
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
