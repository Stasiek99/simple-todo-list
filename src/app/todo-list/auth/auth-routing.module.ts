import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {SignupComponent} from "../signup/components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signup", component: SignupComponent
      },
      {
        path: "login", component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
