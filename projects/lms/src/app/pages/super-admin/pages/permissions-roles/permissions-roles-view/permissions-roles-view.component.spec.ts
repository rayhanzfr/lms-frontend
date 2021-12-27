import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsRolesViewComponent } from './permissions-roles-view.component';

describe('PermissionsRolesViewComponent', () => {
  let component: PermissionsRolesViewComponent;
  let fixture: ComponentFixture<PermissionsRolesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionsRolesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsRolesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
