import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedStatusComponent } from './rejected-status.component';

describe('RejectedStatusComponent', () => {
  let component: RejectedStatusComponent;
  let fixture: ComponentFixture<RejectedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
