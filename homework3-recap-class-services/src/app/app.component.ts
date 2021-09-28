import { Component, OnInit } from '@angular/core';
import { Car } from './interfaces/car';
import { Order } from './interfaces/order';
import { CarsOrdersService } from './components/services/cars-orders.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  constructor(private carsOrdersService: CarsOrdersService) {}

  orders: Order[];
  displayCarFlag: boolean;
  car: Car;
  
  ngOnInit(): void {
    this.orders = this.carsOrdersService.getOrders();
    this.displayCarFlag = this.carsOrdersService.displayCarFlag;
    this.car = this.carsOrdersService.carToDisplay;
  }
  

}
