import { TestBed } from '@angular/core/testing';

import { RejectedStatusService } from './rejected-status.service';

describe('RejectedStatusService', () => {
  let service: RejectedStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectedStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
