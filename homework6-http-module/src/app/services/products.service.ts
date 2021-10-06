import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/products';
import { ProductsRepositoryService } from './products-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepositoryService,
    private router: Router
  ) {}

  private _products = new BehaviorSubject<Product[]>([]);
  $products = this._products.asObservable();

  private _productToUpdate = new BehaviorSubject<Product>({} as Product);

  getProducts() {
    this.productsRepository
      .fetchProducts()
      .subscribe((products) => this._products.next(products));
  }

  setProductToUpdate(product: Product) {
    console.log(product);
    this._productToUpdate.next(product);
  }

  getProductToUpdate() {
    return this._productToUpdate.getValue();
  }

  updateProduct(id: number, product: Product) {
    this.productsRepository
      .updateProduct(id, product)
      .pipe(
        map((product) => {
          this.handleUpdatedProduct(product);
        })
      )
      .subscribe({
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          this.router.navigate(['products']);
        },
      });
  }

  handleUpdatedProduct(product: Product) {
    const products = this._products.getValue();

    const productIdFetched =
      typeof product.id === 'string' ? parseInt(product.id) : product.id;

    const indexOfProduct = products.findIndex(
      ({ id }) => id === productIdFetched
    );

    products[indexOfProduct] = { ...product, id: productIdFetched };

    this._products.next(products);
  }


  deleteProduct(id: number | string) {
    const products = this._products.getValue();

    products.forEach((eachProduct, i) => {

      if(eachProduct.id === id) {
        products.splice(i, 1);
      }
      this._products.next(products);
    })
  }

  addNewProduct(newProduct: Product) {
    console.log(newProduct);

    const products = this._products.getValue();
    const newProductsArray = [ ...products, newProduct ]
    this._products.next(newProductsArray);
  }

}
