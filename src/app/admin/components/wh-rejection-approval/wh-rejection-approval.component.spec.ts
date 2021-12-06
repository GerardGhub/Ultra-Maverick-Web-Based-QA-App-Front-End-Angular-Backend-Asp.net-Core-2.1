import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhRejectionApprovalComponent } from './wh-rejection-approval.component';

describe('WhRejectionApprovalComponent', () => {
  let component: WhRejectionApprovalComponent;
  let fixture: ComponentFixture<WhRejectionApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhRejectionApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhRejectionApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
