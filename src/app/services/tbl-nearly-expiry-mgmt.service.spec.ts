import { TestBed } from '@angular/core/testing';

import { TblNearlyExpiryMgmtService } from './tbl-nearly-expiry-mgmt.service';

describe('TblNearlyExpiryMgmtService', () => {
  let service: TblNearlyExpiryMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TblNearlyExpiryMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
