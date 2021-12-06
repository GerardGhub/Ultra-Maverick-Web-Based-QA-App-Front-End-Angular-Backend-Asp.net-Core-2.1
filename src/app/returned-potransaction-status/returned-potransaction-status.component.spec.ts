import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedPOTransactionStatusComponent } from './returned-potransaction-status.component';

describe('ReturnedPOTransactionStatusComponent', () => {
  let component: ReturnedPOTransactionStatusComponent;
  let fixture: ComponentFixture<ReturnedPOTransactionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnedPOTransactionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnedPOTransactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
