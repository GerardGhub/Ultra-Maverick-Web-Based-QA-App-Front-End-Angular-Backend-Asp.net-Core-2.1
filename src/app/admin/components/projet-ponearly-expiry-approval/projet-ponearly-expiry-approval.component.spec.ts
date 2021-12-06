import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPONearlyExpiryApprovalComponent } from './projet-ponearly-expiry-approval.component';

describe('ProjetPONearlyExpiryApprovalComponent', () => {
  let component: ProjetPONearlyExpiryApprovalComponent;
  let fixture: ComponentFixture<ProjetPONearlyExpiryApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPONearlyExpiryApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPONearlyExpiryApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
