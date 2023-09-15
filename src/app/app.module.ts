import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TodoListModule } from "./todo-list/todo-list.module";
import { SignupModule } from "./signup/signup.module";
import { AuthModule } from "./auth/auth.module";
import { GeneralModule } from "./general/general.module";
import { UserModule } from "./user/user.module";

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
export class AppModule { }
