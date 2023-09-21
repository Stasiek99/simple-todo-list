import { Component } from '@angular/core';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent {
  cols = 3;
  category: string | undefined;

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
