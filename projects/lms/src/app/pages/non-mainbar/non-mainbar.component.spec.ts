import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMainbarComponent } from './non-mainbar.component';

describe('NonMainbarComponent', () => {
  let component: NonMainbarComponent;
  let fixture: ComponentFixture<NonMainbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMainbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMainbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
