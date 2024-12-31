import { Observable } from "rxjs";
import { Product } from "../entities/product.entity";

export abstract class ProductRepository {
    abstract getAllProducts(): Observable<Product[]>;
    abstract getProductById(id: string): Observable<Product>;
}