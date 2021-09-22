import { Component } from '@angular/core';
import { Car } from './interfaces/car';
import { Order } from './interfaces/order';
import { CarsOrdersService } from './components/services/cars-orders.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(private carsOrdersService: CarsOrdersService) {}

  orders: Order [] = this.carsOrdersService.getOrders();

  carToDisplay: Car;
  displayCarFlag: boolean = false;
  
  displayCar(car: Car) {
    console.log('parent:', car);
    this.displayCarFlag = true;
    this.carToDisplay = car;
  }
  
}
