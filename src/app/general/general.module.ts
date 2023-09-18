import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

import {HeaderAdminComponent} from "./components/header/header-admin/header-admin.component";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HeaderNoUserComponent} from './components/header/header-no-user/header-no-user.component';
import {HeaderUserComponent} from './components/header/header-user/header-user.component';
import {HeaderComponent} from './components/header/header.component';
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [
    HeaderAdminComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderNoUserComponent,
    HeaderUserComponent,
    HeaderComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatMenuModule,
    NgIf
  ],
  exports: [
    HeaderAdminComponent,
    HeaderNoUserComponent,
    HeaderUserComponent,
    HeaderComponent
  ]
})
export class GeneralModule {
}
