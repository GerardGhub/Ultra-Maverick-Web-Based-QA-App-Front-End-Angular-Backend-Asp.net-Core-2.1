import { TestBed } from '@angular/core/testing';

import { CancelledPOTransactionStatusService } from './cancelled-potransaction-status.service';

describe('CancelledPOTransactionStatusService', () => {
  let service: CancelledPOTransactionStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelledPOTransactionStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
