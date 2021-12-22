import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesModifyComponent } from './employees-modify.component';

describe('EmployeesModifyComponent', () => {
  let component: EmployeesModifyComponent;
  let fixture: ComponentFixture<EmployeesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
