import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TodoListModule } from "./todo-list/todo-list.module";
import { SignupModule } from "./signup/signup.module";
import { LoginModule } from "./login/login.module";
import { GeneralModule } from "./general/general.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    TodoListModule,
    SignupModule,
    LoginModule,
    GeneralModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
