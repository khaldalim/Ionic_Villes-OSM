import { TestBed } from '@angular/core/testing';

import { CityMapService } from './city-map.service';

describe('CityMapService', () => {
  let service: CityMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
