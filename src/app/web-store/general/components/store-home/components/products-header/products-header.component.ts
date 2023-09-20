import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemsCountChange: EventEmitter<number> = new EventEmitter<number>();
  itemsShowCount = 12;

  onItemsUpdated(count: number): void {
    this.columnsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNumber: number): void {
    this.itemsCountChange.emit(colsNumber);
  }
}
