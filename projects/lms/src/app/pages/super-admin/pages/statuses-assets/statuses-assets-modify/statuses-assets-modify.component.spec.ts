import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesAssetsModifyComponent } from './statuses-assets-modify.component';

describe('StatusesAssetsModifyComponent', () => {
  let component: StatusesAssetsModifyComponent;
  let fixture: ComponentFixture<StatusesAssetsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusesAssetsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesAssetsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
