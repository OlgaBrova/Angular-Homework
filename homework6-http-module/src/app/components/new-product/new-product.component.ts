import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product, Rating } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  newProductForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newProductForm = new FormGroup({
      title: new FormControl(null),
      category: new FormControl(null),
      description: new FormControl(null),
      image: new FormControl(null),
      price: new FormControl(null),
      rate: new FormControl(null),
      count: new FormControl(null)
    })
  }

  onReactiveFormSubmit() {
    const { title, category, description, image, price, rate, count } = this.newProductForm.value;
    
    const newRating: Rating = {
      rate,
      count
    }

    const newProduct: Product = {
      id: Math.floor(Math.random()*10000),
      title,
      category,
      description,
      image,
      price,
      rating: newRating
    }

    this.productsService.addNewProduct(newProduct);
    this.newProductForm.reset();
  }

}
