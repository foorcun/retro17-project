import { Component } from '@angular/core';
import { Category } from '../../core/domain/entities/category.entity';
import { combineLatest, map, Observable } from 'rxjs';
import { MenulerPageFacadeService } from '../../services/menuler-page.facade.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/domain/entities/product.entity';
import { sortProductsByCategoryOrder } from './helpers/sortProductsByCategoryOrder';
import { CategoryProducts } from './models/category-products.entity';

@Component({
  selector: 'app-menuler-page',
  imports: [CommonModule],
  templateUrl: './menuler-page.component.html',
  styleUrl: './menuler-page.component.scss'
})
export class MenulerPageComponent {

  categories$: Observable<Category[]> | undefined;
  categoryProducts$: Observable<CategoryProducts[]> | undefined;

  constructor(
    private menulerPageFacadeService: MenulerPageFacadeService,
  ) { }

  ngOnInit() {
    this.categories$ = this.menulerPageFacadeService.getCategories();
    this.categoryProducts$ = this.menulerPageFacadeService.getProductsGroupedByCategory();
  }


}
