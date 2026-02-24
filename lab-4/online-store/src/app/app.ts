import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductListComponent } from './features/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly productService = inject(ProductService);

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }
}
