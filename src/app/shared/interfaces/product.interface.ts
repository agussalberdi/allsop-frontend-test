import { Category } from './../enums/category.enum';

export interface Product {
    name: string;
    category: Category;
    price: number;
    reduced: number;
    quantity: number;
}
