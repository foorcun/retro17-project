import { Injectable } from "@angular/core";
import { ProductRepository } from "../../../domain/repositories/product.repository";
import { Product } from "../../../domain/entities/product.entity";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class GetProductByIdUseCase {
    constructor(
        private productRepository: ProductRepository
    ) { }

    execute(id: string): Observable<Product> {
        return this.productRepository.getProductById(id);
    }
}