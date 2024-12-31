import { Injectable } from "@angular/core";
import { ProductRepository } from "../../../domain/repositories/product.repository";
import { Observable } from "rxjs";
import { Product } from "../../../domain/entities/product.entity";

@Injectable({
    providedIn: 'root',
})
export class GetAllProductsUseCase {
    constructor(private productRepository: ProductRepository) { }

    execute(): Observable<Product[]> {
        return this.productRepository.getAllProducts();
    }
}