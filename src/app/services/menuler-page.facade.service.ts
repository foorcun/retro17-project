import { Injectable } from '@angular/core';
import { GetAllCategoriesUseCase } from '../core/application/usecases/category/get-all-categories.usecase';
import { GetAllProductsUseCase } from '../core/application/usecases/product/get-all-products.usecase';
import { map, Observable } from 'rxjs';
import { CategoryProducts } from '../pages/menuler-page/models/category-products.entity';
import { Product } from '../core/domain/entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class MenulerPageFacadeService {

  constructor(
    private getAllCategoriesUseCase: GetAllCategoriesUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase
  ) { }

  getCategories() {
    return this.getAllCategoriesUseCase.execute();
  }

  getProducts() {
    return this.getAllProductsUseCase.execute();
  }

  getProductsGroupedByCategory(): Observable<CategoryProducts[]> {
    return this.getProducts().pipe(
      map(products => this.groupProductsByCategory(products))
    );
  }

  private groupProductsByCategory(products: Product[]): CategoryProducts[] {
    const grouped = products.reduce((acc, product) => {
      if (!acc[product.categoryId]) {
        acc[product.categoryId] = {
          category: product.categoryId,
          products: []
        };
      }
      acc[product.categoryId].products.push(product);
      return acc;
    }, {} as { [key: string]: CategoryProducts });

    return Object.values(grouped);
  }
}
