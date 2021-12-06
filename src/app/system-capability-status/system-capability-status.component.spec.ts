import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCapabilityStatusComponent } from './system-capability-status.component';

describe('SystemCapabilityStatusComponent', () => {
  let component: SystemCapabilityStatusComponent;
  let fixture: ComponentFixture<SystemCapabilityStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCapabilityStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCapabilityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
