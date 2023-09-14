import {Component, OnInit} from '@angular/core';

import {UserInterface} from "../../../user/interfaces/user.interface";
import {CurrentUserService} from "../../../signup/services/current-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  currentUser: UserInterface | null = null;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.currentUserService.getCurrentUser();
  }
}
