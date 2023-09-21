import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["shoes", "bags"];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
