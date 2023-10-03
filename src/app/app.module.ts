import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoListAuthModule } from "./todo-list/auth/todo-list-auth.module";
import { GeneralModule } from "./todo-list/general/general.module";
import { TodoListModule } from "./todo-list/todo-list/todo-list.module";
import { CartModule } from "./web-store/cart/cart.module";
import { GeneralStoreModule } from "./web-store/general/general-store.module";
import { CommonModule, NgIf } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TodoListModule,
    TodoListAuthModule,
    GeneralModule,
    CartModule,
    GeneralStoreModule,
    NgIf
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
