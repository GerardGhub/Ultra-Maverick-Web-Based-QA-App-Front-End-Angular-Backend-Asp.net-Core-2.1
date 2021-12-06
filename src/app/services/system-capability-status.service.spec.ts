import { TestBed } from '@angular/core/testing';

import { SystemCapabilityStatusService } from './system-capability-status.service';

describe('SystemCapabilityStatusService', () => {
  let service: SystemCapabilityStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemCapabilityStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
