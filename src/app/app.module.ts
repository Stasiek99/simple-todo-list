import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TodoListModule } from "./todo-list/todo-list.module";
import { SignupModule } from "./signup/signup.module";
import { LoginModule } from "./auth/login/login.module";
import { GeneralModule } from "./general/general.module";
import { UserModule } from "./user-details/user.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodoListModule,
    SignupModule,
    LoginModule,
    GeneralModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
