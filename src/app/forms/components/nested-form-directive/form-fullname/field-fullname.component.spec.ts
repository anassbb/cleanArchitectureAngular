import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFullnameComponent } from './field-fullname.component';

describe('FieldFullnameComponent', () => {
  let component: FieldFullnameComponent;
  let fixture: ComponentFixture<FieldFullnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldFullnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFullnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
