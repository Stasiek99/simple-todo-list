import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SignupModule} from "./todo-list/signup/signup.module";
import {AuthModule} from "./todo-list/auth/auth.module";
import {GeneralModule} from "./todo-list/general/general.module";
import {UserModule} from "./todo-list/user/user.module";
import {TodoListModule} from "./todo-list/todo-list/todo-list.module";
import {CartModule} from "./web-store/cart/cart.module";
import {GeneralStoreModule} from "./web-store/general/general-store.module";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    TodoListModule,
    SignupModule,
    AuthModule,
    GeneralModule,
    UserModule,
    CartModule,
    GeneralStoreModule,
    NgIf,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
