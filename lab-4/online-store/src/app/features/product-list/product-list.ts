import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  readonly stars = [1, 2, 3, 4, 5];
  readonly galleryImagesById: Record<number, string[]> = this.products.reduce(
    (acc, product) => {
      const validImages = [product.image, ...product.images]
        .map((image) => image.trim())
        .filter((image) => image.length > 0);

      acc[product.id] = Array.from(new Set(validImages));
      return acc;
    },
    {} as Record<number, string[]>,
  );

  selectedImageIndexById: Record<number, number> = {};

  starFillPercent(rating: number, star: number): number {
    const raw = Math.max(0, Math.min(1, rating - (star - 1)));
    return raw * 100;
  }

  getWhatsAppShareLink(product: Product): string {
    const text = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getTelegramShareLink(product: Product): string {
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
  }

  getCurrentImage(product: Product): string {
    const images = this.galleryImagesById[product.id] ?? [product.image];
    const currentIndex = this.getCurrentImageIndex(product.id);
    return images[currentIndex] ?? images[0];
  }

  getCurrentImageIndex(productId: number): number {
    return this.selectedImageIndexById[productId] ?? 0;
  }

  previousImage(productId: number): void {
    this.shiftImage(productId, -1);
  }

  nextImage(productId: number): void {
    this.shiftImage(productId, 1);
  }

  private shiftImage(productId: number, step: number): void {
    const images = this.galleryImagesById[productId] ?? [];
    if (images.length <= 1) return;

    const currentIndex = this.getCurrentImageIndex(productId);
    const nextIndex = (currentIndex + step + images.length) % images.length;
    this.selectedImageIndexById[productId] = nextIndex;
  }
}
