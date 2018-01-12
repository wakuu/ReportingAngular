import { TestBed, inject } from '@angular/core/testing';

import { FiltresService } from './filtres.service';

describe('FiltresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltresService]
    });
  });

  it('should be created', inject([FiltresService], (service: FiltresService) => {
    expect(service).toBeTruthy();
  }));
});
