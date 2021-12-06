import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCancelledPoComponent } from './projects-cancelled-po.component';

describe('ProjectsCancelledPoComponent', () => {
  let component: ProjectsCancelledPoComponent;
  let fixture: ComponentFixture<ProjectsCancelledPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCancelledPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCancelledPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
