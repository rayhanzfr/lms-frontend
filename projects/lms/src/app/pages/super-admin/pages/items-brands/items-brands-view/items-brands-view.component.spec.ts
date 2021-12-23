import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBrandsViewComponent } from './items-brands-view.component';

describe('ItemsBrandsViewComponent', () => {
  let component: ItemsBrandsViewComponent;
  let fixture: ComponentFixture<ItemsBrandsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBrandsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBrandsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
