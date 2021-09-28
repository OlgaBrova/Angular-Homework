import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-ordered-cars',
  templateUrl: './ordered-cars.component.html',
  styleUrls: ['./ordered-cars.component.css']
})
export class OrderedCarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  orderedCarsFromService: Car[];

  ngOnInit(): void {
    this.orderedCarsFromService = this.carsService.orderedCarsList;
  }

}
