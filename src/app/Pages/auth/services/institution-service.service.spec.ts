import { TestBed } from '@angular/core/testing';

import { InstitutionSelectionService } from './institution-service.service';

describe('InstitutionServiceService', () => {
  let service: InstitutionSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
