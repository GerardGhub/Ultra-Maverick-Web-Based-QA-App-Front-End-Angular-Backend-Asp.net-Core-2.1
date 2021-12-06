import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblNearlyExpiryMgmtComponent } from './tbl-nearly-expiry-mgmt.component';

describe('TblNearlyExpiryMgmtComponent', () => {
  let component: TblNearlyExpiryMgmtComponent;
  let fixture: ComponentFixture<TblNearlyExpiryMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblNearlyExpiryMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblNearlyExpiryMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
