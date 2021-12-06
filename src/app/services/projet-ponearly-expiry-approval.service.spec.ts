import { TestBed } from '@angular/core/testing';

import { ProjetPONearlyExpiryApprovalService } from './projet-ponearly-expiry-approval.service';

describe('ProjetPONearlyExpiryApprovalService', () => {
  let service: ProjetPONearlyExpiryApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetPONearlyExpiryApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
