import { TestBed } from '@angular/core/testing';

import { TblDryPartialReceivingRejectionService } from './tbl-dry-partial-receiving-rejection.service';

describe('TblDryPartialReceivingRejectionService', () => {
  let service: TblDryPartialReceivingRejectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TblDryPartialReceivingRejectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
