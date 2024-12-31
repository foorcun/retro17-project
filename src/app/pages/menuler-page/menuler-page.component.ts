import { Component } from '@angular/core';
import { Category } from '../../core/domain/entities/category.entity';
import { Observable } from 'rxjs';
import { MenulerPageFacadeService } from '../../services/menuler-page.facade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menuler-page',
  imports: [CommonModule],
  templateUrl: './menuler-page.component.html',
  styleUrl: './menuler-page.component.scss'
})
export class MenulerPageComponent {

  categories$: Observable<Category[]> | undefined;

  constructor(
    private menulerPageFacadeService: MenulerPageFacadeService
  ) { }

  ngOnInit() {
    this.categories$ = this.menulerPageFacadeService.getCategories();
  }

  
}
