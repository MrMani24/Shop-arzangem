import { TestBed } from '@angular/core/testing';

import { ServiceBasketService } from './service-basket.service';

describe('ServiceBasketService', () => {
  let service: ServiceBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
