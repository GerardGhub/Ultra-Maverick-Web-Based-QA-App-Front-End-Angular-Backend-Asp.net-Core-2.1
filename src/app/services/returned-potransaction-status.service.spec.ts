import { TestBed } from '@angular/core/testing';

import { ReturnedPOTransactionStatusService } from './returned-potransaction-status.service';

describe('ReturnedPOTransactionStatusService', () => {
  let service: ReturnedPOTransactionStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnedPOTransactionStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
