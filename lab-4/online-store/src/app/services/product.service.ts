import { Injectable } from "@angular/core";
import { CATEGORIES } from "../data/categories.data";
import { PRODUCTS } from "../data/products.data";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private readonly categories: Category[] = CATEGORIES;
    private readonly products: Product[] = PRODUCTS;

    getCategories(): Category[] {
        return [...this.categories];
    }

    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter((product) => product.categoryId === categoryId);
    }
}