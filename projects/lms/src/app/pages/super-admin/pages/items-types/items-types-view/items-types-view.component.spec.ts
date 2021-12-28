import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTypesViewComponent } from './items-types-view.component';

describe('ItemsTypesViewComponent', () => {
  let component: ItemsTypesViewComponent;
  let fixture: ComponentFixture<ItemsTypesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTypesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTypesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
