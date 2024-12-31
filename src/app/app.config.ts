import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ProductApiRepository } from './core/infrastructure/repositories/product-api.repository';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { CategoryRepository } from './core/domain/repositories/category.repository';
import { CategoryApiRepository } from './core/infrastructure/repositories/category-api.repository';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideHttpClient(),
  { provide: ProductRepository, useClass: ProductApiRepository },
  { provide: CategoryRepository, useClass: CategoryApiRepository }
  ]
};
