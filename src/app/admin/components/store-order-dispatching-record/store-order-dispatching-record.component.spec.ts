import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderDispatchingRecordComponent } from './store-order-dispatching-record.component';

describe('StoreOrderDispatchingRecordComponent', () => {
  let component: StoreOrderDispatchingRecordComponent;
  let fixture: ComponentFixture<StoreOrderDispatchingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderDispatchingRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderDispatchingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
