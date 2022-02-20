import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormServiceComponent } from './nested-form-service.component';

describe('NestedFormServiceComponent', () => {
  let component: NestedFormServiceComponent;
  let fixture: ComponentFixture<NestedFormServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
