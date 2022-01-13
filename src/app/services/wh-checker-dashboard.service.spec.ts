import { TestBed } from '@angular/core/testing';

import { WhCheckerDashboardService } from './wh-checker-dashboard.service';

describe('WhCheckerDashboardService', () => {
  let service: WhCheckerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhCheckerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
