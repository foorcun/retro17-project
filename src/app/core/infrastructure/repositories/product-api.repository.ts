import { map, Observable } from "rxjs";
import { Product } from "../../domain/entities/product.entity";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ProductApiRepository implements ProductRepository {

    private apiUrl = '/api/products.json'; // Ensure this matches your file path

    constructor(private http: HttpClient) { }
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    getProductById(id: string): Observable<Product> {
        // firebase'de direkt /id seklinde falan bi http req var normalde. ama simdilik burda bu olsun.
        // return this.http.get<Product>(`${this.apiUrl}/${id}`); // sunu gibi bisi.
        return this.http.get<Product[]>(this.apiUrl).pipe(
            map((products: Product[]) => {
                const product = products.find(p => p.id === id);
                if (!product) {
                    throw new Error(`Product with id ${id} not found.`);
                }
                return product;
            })
        );
    }

}