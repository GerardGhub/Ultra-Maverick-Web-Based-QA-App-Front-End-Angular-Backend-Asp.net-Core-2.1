import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledPOTransactionStatusComponent } from './cancelled-potransaction-status.component';

describe('CancelledPOTransactionStatusComponent', () => {
  let component: CancelledPOTransactionStatusComponent;
  let fixture: ComponentFixture<CancelledPOTransactionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledPOTransactionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledPOTransactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
