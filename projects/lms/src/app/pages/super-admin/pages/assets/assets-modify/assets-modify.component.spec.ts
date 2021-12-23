import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsModifyComponent } from './assets-modify.component';

describe('AssetsModifyComponent', () => {
  let component: AssetsModifyComponent;
  let fixture: ComponentFixture<AssetsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
