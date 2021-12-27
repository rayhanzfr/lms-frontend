import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsRolesModifyComponent } from './permissions-roles-modify.component';

describe('PermissionsRolesModifyComponent', () => {
  let component: PermissionsRolesModifyComponent;
  let fixture: ComponentFixture<PermissionsRolesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionsRolesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsRolesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
