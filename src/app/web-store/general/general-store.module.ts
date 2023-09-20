import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";

import {HomeComponent} from "./components/home/home.component";
import {StoreHeaderUserComponent} from "./components/store-header/store-header-user/store-header-user.component";
import {StoreHeaderComponent} from "./components/store-header/store-header.component";
import {StoreHeaderAdminComponent} from "./components/store-header/store-header-admin/store-header-admin.component";
import { StoreHeaderNoUserComponent } from './components/store-header/store-header-no-user/store-header-no-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    StoreHeaderUserComponent,
    StoreHeaderComponent,
    StoreHeaderAdminComponent,
    StoreHeaderNoUserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    RouterLink
  ]
})
export class GeneralStoreModule {
}
