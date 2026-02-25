import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent implements OnChanges {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  readonly stars = [1, 2, 3, 4, 5];
  currentImageIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'])
      this.currentImageIndex = 0;
  }

  get galleryImages(): string[] {
    const validImages = [this.product.image, ...this.product.images]
      .map((image) => image.trim())
      .filter((image) => image.length > 0);

    return Array.from(new Set(validImages));
  }

  get currentImage(): string {
    return this.galleryImages[this.currentImageIndex] ?? this.product.image;
  }

  previousImage(): void {
    const images = this.galleryImages;
    if (images.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
  }

  nextImage(): void {
    const images = this.galleryImages;
    if (images.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
  }

  starFillPercent(rating: number, star: number): number {
    const raw = Math.max(0, Math.min(1, rating - (star - 1)));
    return raw * 100;
  }

  like(): void {
    this.product.likes += 1;
  }

  remove(): void {
    this.delete.emit(this.product.id);
  }

  getWhatsAppShareLink(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getTelegramShareLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}
