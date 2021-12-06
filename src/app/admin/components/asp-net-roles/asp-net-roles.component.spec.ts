import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspNetRolesComponent } from './asp-net-roles.component';

describe('AspNetRolesComponent', () => {
  let component: AspNetRolesComponent;
  let fixture: ComponentFixture<AspNetRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspNetRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspNetRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
