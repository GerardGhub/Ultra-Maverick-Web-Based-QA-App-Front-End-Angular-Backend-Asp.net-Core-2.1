import { TestBed } from '@angular/core/testing';

import { AspNetRolesService } from './asp-net-roles.service';

describe('AspNetRolesService', () => {
  let service: AspNetRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspNetRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
