import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModifyComponent } from './register-modify.component';

describe('RegisterModifyComponent', () => {
  let component: RegisterModifyComponent;
  let fixture: ComponentFixture<RegisterModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
