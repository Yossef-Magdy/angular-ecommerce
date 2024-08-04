export interface Product {
    id: number;
    title: string;
    stock: number;
    thumbnail: string; 
    price: number;
    description: string;
    rating: number;
    images?: string[];
    brand?: string;
    category: string;
}
