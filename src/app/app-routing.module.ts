import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list/todo-list.component";
import { SignupComponent } from "./signup/components/signup/signup.component";
import { TodoListElementComponent } from "./todo-list/todo-list-element/todo-list-element.component";
import { UserDetailsComponent } from "./user/components/user-details/user-details.component";
import { UserListComponent } from "./user/components/user-list/user-list.component";
import { LoginComponent } from "./auth/components/login/login.component";
import { HomeComponent } from "./general/components/home/home.component";
import { PageNotFoundComponent } from "./general/components/page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/guards/auth.guard";

export const routeConfig: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {path: "todolist/:userId", canActivate: [AuthGuard], component: TodoListComponent,
    // children:[
    //   {
    //     path:":todoId",
    //     component: TodoListElementComponent
    //   }
    // ]
  },
  {path: "todolist/:userId/todo/:todoId", component: TodoListElementComponent},
  {path: "users",
    children: [
      {
        path: "", component: UserListComponent
      },
      {
        path: ":id", component: UserDetailsComponent
      }
    ]
  },
  {path: "auth",
    children:[
      {
        path:'signup',
        component: SignupComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: "**", redirectTo: "/page-not-found"
  }
];




export const routeConfig2: Routes = [
  {path: "", redirectTo: "todolist", pathMatch: "full"},
  {path: "todolist",
    children:[
      {
        path:'',
        component: TodoListComponent
      },
      // {
      //   path:':id',
      //   component: TodoListElementComponent
      // }
    ]
  },
  // {path: "users",
  //   children:[
  //     {
  //       path:'',
  //       component: UserListComponent
  //     },
  //     {
  //       path:':id',
  //       // service.getUserById(id)
  //       component: UserDetailsComponent
  //     },
  //     {
  //       // service.getCurrentUser()
  //       path:'current-user',
  //       component: CurrentUserCompoennt
  //     }
  //   ]
  // },

  {path: "auth",
    children:[
      {
        path:'signup',
        component: SignupComponent
      },
      // {
      //   path:'login',
      //   component: logincomponent
      // }
    ]
  },
  {path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
