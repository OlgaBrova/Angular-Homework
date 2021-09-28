import { EventEmitter, Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  orderedCarsList: Car[] = [];

  private cars: Car[] = [
    {
      id: 1,
      name: "Mitsubishi",
      model: "Mitsubishi ASX",
      yearOfProduction: 2018,
      imageUrl: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Mitsubishi-ASX_0.png",
      typeOfCar: "SUV",
      gearBox: "Automatic gearbox",
      numberOfSeats: 5,
      price: 75
    },
    {
      id: 2,
      name: "Suzuki",
      model: "Suzuki Grand Vitara",
      yearOfProduction: 2016,
      imageUrl: "https://qcveiculos.com.br/wp-content/uploads/2017/01/Suzuki-Vitara-2018.jpg",
      typeOfCar: "SUV",
      gearBox: "Manual gearbox",
      numberOfSeats: 5,
      price: 67
    },
    {
      id: 3,
      name: "Volkswagen",
      model: "Volkswagen Passat",
      yearOfProduction: 2019,
      imageUrl: "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/05/chrome-image-417382.png",
      typeOfCar: "Large car",
      gearBox: "Manual gearbox",
      numberOfSeats: 5,
      price: 80
    },
    {
      id: 4,
      name: "Citroen",
      model: "Citroen C-Elysee",
      yearOfProduction: 2017,
      imageUrl: "https://media.citroen.fr/image/75/0/c_elysee.241750.36.jpg",
      typeOfCar: "Large car",
      gearBox: "Manual gearbox",
      numberOfSeats: 5,
      price: 60
    },
    {
      id: 5,
      name: "Ford",
      model: "Ford Focus",
      yearOfProduction: 2016,
      imageUrl: "https://media.citroen.fr/image/75/0/c_elysee.241750.36.jpg",
      typeOfCar: "Medium car",
      gearBox: "Manual gearbox",
      numberOfSeats: 5,
      price: 50
    },
    {
      id: 6,
      name: "Volkswagen",
      model: "Volkswagen Polo",
      yearOfProduction: 2018,
      imageUrl: "https://pictures.topspeed.com/IMG/crop_webp/201706/volkswagen-polo-12_1600x0.webp",
      typeOfCar: "Medium car",
      gearBox: "Automatic gearbox",
      numberOfSeats: 5,
      price: 50
    },
    {
      id: 7,
      name: "Volkswagen",
      model: "Volkswagen Golf 8",
      yearOfProduction: 2019,
      imageUrl: "https://cdn.euroncap.com/media/56959/volkswagen-golf.png?mode=crop&width=359&height=235",
      typeOfCar: "Medium car",
      gearBox: "Automatic gearbox",
      numberOfSeats: 5,
      price: 60
    },
    {
      id: 8,
      name: "Volvo",
      model: "Volvo S90",
      yearOfProduction: 2018,
      imageUrl: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Volvo-S90.png",
      typeOfCar: "Large car",
      gearBox: "Automatic gearbox",
      numberOfSeats: 5,
      price: 85
    }
  ]

  loadCars() {
    return this.cars;
  }

  loadOrderedCars(orderedCar: Car) {
    this.orderedCarsList.push(orderedCar);
    
  }

}
