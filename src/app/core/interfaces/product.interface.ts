import { Category } from './../enums/category.enum';

export interface Product {
    id: string;
    name: string;
    category: Category;
    price: number;
    quantity: number;
}