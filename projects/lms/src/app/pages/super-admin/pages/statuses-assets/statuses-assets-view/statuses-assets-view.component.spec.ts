import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesAssetsViewComponent } from './statuses-assets-view.component';

describe('StatusesAssetsViewComponent', () => {
  let component: StatusesAssetsViewComponent;
  let fixture: ComponentFixture<StatusesAssetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusesAssetsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesAssetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
