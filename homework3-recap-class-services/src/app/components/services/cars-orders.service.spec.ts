import { TestBed } from '@angular/core/testing';
import { CarsOrdersService } from './cars-orders.service';

describe('CarsServiceService', () => {
  let service: CarsOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
