import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBrandsModifyComponent } from './items-brands-modify.component';

describe('ItemsBrandsModifyComponent', () => {
  let component: ItemsBrandsModifyComponent;
  let fixture: ComponentFixture<ItemsBrandsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBrandsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBrandsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
