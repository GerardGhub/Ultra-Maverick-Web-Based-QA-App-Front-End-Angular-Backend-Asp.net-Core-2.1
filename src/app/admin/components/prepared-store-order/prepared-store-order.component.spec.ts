import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedStoreOrderComponent } from './prepared-store-order.component';

describe('PreparedStoreOrderComponent', () => {
  let component: PreparedStoreOrderComponent;
  let fixture: ComponentFixture<PreparedStoreOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparedStoreOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedStoreOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
