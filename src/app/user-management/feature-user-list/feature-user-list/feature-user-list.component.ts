import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserManagementFacade } from "../../data-access";

@Component({
  selector: "app-user-list",
  templateUrl: "./feature-user-list.component.html",
  styleUrls: ["./feature-user-list.component.scss"]
})
export class FeatureUserListComponent implements OnInit {
  users$ = this.userManagementFacade.users$;

  constructor(private userManagementFacade: UserManagementFacade, private router: Router) {
  }

  ngOnInit(): void {
    this.userManagementFacade.fetchUsers();
  }

  redirectToUserProfile(id: string): void {
    this.router.navigate(["/users", id]);
  }


  redirectToTodoList(): void {
    // TODO it makes sense ? Do we have such a route?
    this.router.navigate(["/", "todolist"]);
  }
}
