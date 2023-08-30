import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { CurrentUserService } from "../../../signup/services/current-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() menuIconClicked = new EventEmitter<void>();
  userId: string | undefined = undefined;

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.userId = this.currentUserService.getCurrentUser()?.id;
  }


  onClickMenuIcon(): void {
    this.menuIconClicked.emit();
  }
}
