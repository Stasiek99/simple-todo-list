import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserContract } from "../../../../../contracts/user.contract";
import { EntityId } from "../../../../../contracts/utils/entity-id.type";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user!: UserContract;

  @Output()
  gotoTodolist = new EventEmitter<EntityId>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectToTodoList(): void {
    this.router.navigate(["/todolist", this.user.id]);
  }
}
