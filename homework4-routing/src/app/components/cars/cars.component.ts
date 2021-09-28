import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  cars: Car[];

  ngOnInit(): void {
    this.cars = this.carsService.loadCars();
  }

  sendOrderedCars(car: Car) {
    this.carsService.loadOrderedCars(car);
  }

}
