import { TestBed } from '@angular/core/testing';

import { WhRejectionApprovalService } from './wh-rejection-approval.service';

describe('WhRejectionApprovalService', () => {
  let service: WhRejectionApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhRejectionApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
