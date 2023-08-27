import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuIconClicked = new EventEmitter<void>();

  onClickMenuIcon(): void {
    this.menuIconClicked.emit();
  }
}
