import { ProductsService } from './products.service';

describe('ProductsService', () => {
    let service: ProductsService;
    beforeEach(() => { service = new ProductsService(); });

    it('getProducts should return array of products', (done: DoneFn) => {
      service.getProducts().subscribe(products => {
        expect(products).toBe(service.products);
        done();
      });
    });
});
