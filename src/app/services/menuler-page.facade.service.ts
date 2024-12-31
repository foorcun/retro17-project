import { Injectable } from '@angular/core';
import { GetAllCategoriesUseCase } from '../core/application/usecases/category/get-all-categories.usecase';

@Injectable({
  providedIn: 'root'
})
export class MenulerPageFacadeService {

  constructor(
    private getAllCategoriesUseCase: GetAllCategoriesUseCase
  ) { }

  getCategories() {
    return this.getAllCategoriesUseCase.execute();
  }
}
