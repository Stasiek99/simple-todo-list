import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {UserInterface} from "../../../user/interfaces/user.interface";
import {TodoListService} from "../../../todo-list/services/todo-list.service";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usersArray: UserInterface[] = [];

  constructor(private userService: UserService, private router: Router, private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  deleteUser(deletedUser: UserInterface): void {
    this.userService.deleteUser(deletedUser).subscribe(usertoDelete => {
      console.log(usertoDelete);
    });
    this.fetchUsers();
    this.todoListService.deleteUserTodos(deletedUser.id);
  }

  approveUser(user: UserInterface): void {
    this.userService.approveUser(user).subscribe(updatedUser => {
      console.log(updatedUser);
    });
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.usersArray = users;
    });
  }

  redirectToHomePage(): void {
    this.router.navigate(["/", "store-home"])
  }
}
