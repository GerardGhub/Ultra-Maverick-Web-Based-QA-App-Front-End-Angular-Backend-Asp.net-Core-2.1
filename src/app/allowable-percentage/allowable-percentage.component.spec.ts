import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowablePercentageComponent } from './allowable-percentage.component';

describe('AllowablePercentageComponent', () => {
  let component: AllowablePercentageComponent;
  let fixture: ComponentFixture<AllowablePercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowablePercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowablePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
