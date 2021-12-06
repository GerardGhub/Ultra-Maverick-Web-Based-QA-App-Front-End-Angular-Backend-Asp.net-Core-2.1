import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPartialPoComponent } from './projects-partial-po.component';

describe('ProjectsPartialPoComponent', () => {
  let component: ProjectsPartialPoComponent;
  let fixture: ComponentFixture<ProjectsPartialPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPartialPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPartialPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
