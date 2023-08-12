import { NgModule } from "@angular/core";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo-list/todo-list/todo-list.component";
import { SignupComponent } from "./signup/components/signup/signup.component";
import { TodoListElementComponent } from "./todo-list/todo-list-element/todo-list-element.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

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
        path: ":id", component: UserDetailsComponent
      }
    ]
  },
  //TODO: zadanie nr 1 zrobic strone dla todo element
  // {path: "todolist/:id", component: TodoListElementComponent},
  {path: "signup", component: SignupComponent}
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
  //TODO: zadanie nr 1 zrobic strone dla todo element
  // {path: "todolist/:id", component: TodoListElementComponent},
  {path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}




// class TodoListElementComponent {
//
//   constructor(private activatedRoute: ActivatedRoute) {
//   }
//
//   //TODO: zadanie nr 1 zrobic strone dla todo element
//   ngOnInit() {
//     // id to nazwa ktorą podasz w routing (:id)
//
//     // pobieramy z url todo id
//     // todo id
//     this.activatedRoute.snapshot.params['id']
//
//     // pobieramy liste todosow z local storage
//     // wyszukujemy todosa z danym id
//
//     // przekazujemy do komponentu i wyswietlamy
//   }
//
// }
