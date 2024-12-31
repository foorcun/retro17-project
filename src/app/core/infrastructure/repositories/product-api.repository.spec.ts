

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiRepository } from './product-api.repository';
import { Product } from '../../domain/entities/product.entity';

describe('Product Api Repository (Real HTTP)', () => {
    let service: ProductApiRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ProductApiRepository],
        });
        service = TestBed.inject(ProductApiRepository);
    });

    it('should fetch products as Product[]', (done: DoneFn) => {

        console.log('######### Product Api Repository (Real HTTP) #########');
        service.getAllProducts().subscribe((products: Product[]) => {
            expect(products).toBeTruthy();
            expect(products.length).toBeGreaterThan(0);

            const product = products[0];
            expect(product).toBeDefined();
            expect(product.id).toBeDefined(); // Plain access to properties since no mapping is done
            expect(product.name).toBeDefined();
            expect(product.description).toBeDefined();
            expect(product.price).toBeDefined();
            expect(product.imageUrl).toBeDefined();

            // console.log('Product:', product.id, product.name);
            products.forEach((p) => {
                console.log('Product:', p.id, p.name);
            });

            console.log('######### Product Api Repository (Real HTTP) ENDS #########');
            done();
        });
    });

});