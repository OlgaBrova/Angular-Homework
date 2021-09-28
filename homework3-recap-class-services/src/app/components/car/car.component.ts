import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsOrdersService } from '../services/cars-orders.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carsOrdersService: CarsOrdersService) { }

  selectedCar: Car;
  
  ngOnInit(): void {
    this.selectedCar = this.carsOrdersService.carToDisplay;
  }

}
