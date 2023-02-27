import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationTestComponent } from './interpolation-test.component';

describe('InterpolationTestComponent', () => {
  let component: InterpolationTestComponent;
  let fixture: ComponentFixture<InterpolationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
