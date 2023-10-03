import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "../feature-signup/signup/signup.component";
import { LoginComponent } from "../feature-login/login/login.component";
import { FeatureLoginModule } from "../feature-login/feature-login.module";
import { FeatureSignupModule } from "../feature-signup/feature-signup.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    pathMatch: "full",
    path: "", redirectTo: "login"
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FeatureLoginModule,
    FeatureSignupModule,
    RouterModule.forChild(routes)
  ]
})
export class ShellAuthModule {
}

