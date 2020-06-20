import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStudentsComponent } from './progress-students.component';

describe('ProgressStudentsComponent', () => {
  let component: ProgressStudentsComponent;
  let fixture: ComponentFixture<ProgressStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
