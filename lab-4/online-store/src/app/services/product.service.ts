import { CATEGORIES } from "../data/categories.data";
import { PRODUCTS } from "../data/products.data";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

function getCategories(): Category[] {
    return CATEGORIES;
}

function getProducts(): Product[] {
    return PRODUCTS;
}

function getProductsByCategory(categoryId: number): Product[] {
    return getProducts().filter(product => product.categoryId === categoryId);
}