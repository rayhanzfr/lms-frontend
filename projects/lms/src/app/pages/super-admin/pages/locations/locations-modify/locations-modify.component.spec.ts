import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsModifyComponent } from './locations-modify.component';

describe('LocationsModifyComponent', () => {
  let component: LocationsModifyComponent;
  let fixture: ComponentFixture<LocationsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
