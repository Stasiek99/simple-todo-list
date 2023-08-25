import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list/todo-list.component";
import { SignupComponent } from "./signup/components/signup/signup.component";
import { TodoListElementComponent } from "./todo-list/todo-list-element/todo-list-element.component";
import { UserDetailsComponent } from "./user/components/user-details/user-details.component";
import { UserListComponent } from "./user/components/user-list/user-list.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "todolist", pathMatch: "full"},
  {path: "todolist",
    children:[
      {
        path:"",
        component: TodoListComponent
      },
      {
        path:":id",
        component: TodoListElementComponent
      }
    ]
  },
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
      // {
      //   path:'login',
      //   component: logincomponent
      // }
    ]
  },
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
