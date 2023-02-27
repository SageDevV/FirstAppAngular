import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGenericComponent } from './component-generic.component';

describe('ComponentGenericComponent', () => {
  let component: ComponentGenericComponent;
  let fixture: ComponentFixture<ComponentGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
