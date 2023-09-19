import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SignupModule} from "./todo-list/signup/signup.module";
import {AuthModule} from "./todo-list/auth/auth.module";
import {GeneralModule} from "./todo-list/general/general.module";
import {UserModule} from "./todo-list/user/user.module";
import {TodoListModule} from "./todo-list/todo-list/todo-list.module";

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
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
