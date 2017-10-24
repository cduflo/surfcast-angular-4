import { TestBed, inject } from '@angular/core/testing';

import { SpotDetailResolver } from './spot-detail-resolver.service';
import { ForecastServiceService } from '../services/forecast-service.service';

describe('SpotDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotDetailResolver, ForecastServiceService]
    });
  });

  it('should be created', inject([SpotDetailResolver], (service: SpotDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
