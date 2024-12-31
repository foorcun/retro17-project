import { Product } from "../../../core/domain/entities/product.entity";

// core/domain/entities/category-products.entity.ts
export interface CategoryProducts {
  category: string;
  products: Product[];
}
