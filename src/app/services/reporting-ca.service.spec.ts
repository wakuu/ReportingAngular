import { TestBed, inject } from '@angular/core/testing';

import { ReportingCaService } from './reporting-ca.service';

describe('ReportingCaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportingCaService]
    });
  });

  it('should be created', inject([ReportingCaService], (service: ReportingCaService) => {
    expect(service).toBeTruthy();
  }));
});
