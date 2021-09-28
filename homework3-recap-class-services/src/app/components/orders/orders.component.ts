import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { Order } from 'src/app/interfaces/order';
import { CarsOrdersService } from '../services/cars-orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() boundOrder: Order;

  constructor(private carsOrdersService: CarsOrdersService) {}

  ngOnInit(): void {
    
  }

  displayCarOnBtn(car: Car) {
    this.carsOrdersService.displayCarFlag = true;
    this.carsOrdersService.displayCar(car);
  }
}
