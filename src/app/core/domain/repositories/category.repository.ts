import { Observable } from "rxjs";
import { Category } from "../entities/category.entity";

export abstract class CategoryRepository {
    abstract getAllCategories(): Observable<Category[]>;
}