import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../../domain/entities/category.entity";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: 'root',
})
export class CategoryApiRepository {
    private apiUrl = '/api/categories.json'; // Ensure this matches your file path

    constructor(private http: HttpClient) { }
    
    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiUrl);
    }

}