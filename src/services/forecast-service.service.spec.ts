import { TestBed, inject } from '@angular/core/testing';

import { ForecastServiceService } from './forecast-service.service';

describe('ForecastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastServiceService]
    });
  });

  it('should be created', inject([ForecastServiceService], (service: ForecastServiceService) => {
    expect(service).toBeTruthy();
  }));
});
