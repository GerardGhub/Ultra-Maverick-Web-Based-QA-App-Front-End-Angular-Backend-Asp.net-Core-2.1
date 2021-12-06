import { TestBed } from '@angular/core/testing';

import { AllowablePercentageService } from './allowable-percentage.service';

describe('AllowablePercentageService', () => {
  let service: AllowablePercentageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowablePercentageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
