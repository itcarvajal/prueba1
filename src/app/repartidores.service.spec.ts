import { TestBed } from '@angular/core/testing';

import { RepartidoresService } from './repartidores.service';

describe('RepartidoresService', () => {
  let service: RepartidoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepartidoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
