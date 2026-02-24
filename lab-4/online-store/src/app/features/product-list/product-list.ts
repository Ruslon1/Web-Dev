import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnChanges {
  @Input({ required: true }) products: Product[] = [];
  visibleProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts = [...this.products];
    }
  }

  onDelete(productId: number): void {
    this.visibleProducts = this.visibleProducts.filter((p) => p.id !== productId);
  }
}
