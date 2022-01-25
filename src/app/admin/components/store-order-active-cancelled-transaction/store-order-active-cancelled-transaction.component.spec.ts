import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderActiveCancelledTransactionComponent } from './store-order-active-cancelled-transaction.component';

describe('StoreOrderActiveCancelledTransactionComponent', () => {
  let component: StoreOrderActiveCancelledTransactionComponent;
  let fixture: ComponentFixture<StoreOrderActiveCancelledTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderActiveCancelledTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderActiveCancelledTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
