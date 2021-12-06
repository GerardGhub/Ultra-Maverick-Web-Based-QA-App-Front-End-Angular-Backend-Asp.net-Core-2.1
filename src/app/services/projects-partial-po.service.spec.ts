import { TestBed } from '@angular/core/testing';

import { ProjectsPartialPoService } from './projects-partial-po.service';

describe('ProjectsPartialPoService', () => {
  let service: ProjectsPartialPoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsPartialPoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
