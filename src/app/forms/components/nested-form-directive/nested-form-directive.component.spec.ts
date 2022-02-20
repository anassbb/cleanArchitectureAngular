import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormDirectiveComponent } from './nested-form-directive.component';

describe('NestedFormDirectiveComponent', () => {
  let component: NestedFormDirectiveComponent;
  let fixture: ComponentFixture<NestedFormDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
