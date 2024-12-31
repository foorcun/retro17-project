import { Injectable } from "@angular/core";
import { CategoryRepository } from "../../../domain/repositories/category.repository";
import { Category } from "../../../domain/entities/category.entity";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class GetAllCategoriesUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    execute(): Observable<Category[]> {
        return this.categoryRepository.getAllCategories();
    }
}