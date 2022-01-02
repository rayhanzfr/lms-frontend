import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesModifyComponent } from './profiles-modify.component';

describe('ProfilesModifyComponent', () => {
  let component: ProfilesModifyComponent;
  let fixture: ComponentFixture<ProfilesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
