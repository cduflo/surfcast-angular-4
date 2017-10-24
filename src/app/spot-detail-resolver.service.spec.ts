import { TestBed, inject } from '@angular/core/testing';

import { SpotDetailResolverService } from './spot-detail-resolver.service';

describe('SpotDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotDetailResolverService]
    });
  });

  it('should be created', inject([SpotDetailResolverService], (service: SpotDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
