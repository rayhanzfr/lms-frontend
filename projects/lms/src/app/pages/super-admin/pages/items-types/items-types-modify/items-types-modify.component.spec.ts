import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTypesModifyComponent } from './items-types-modify.component';

describe('ItemsTypesModifyComponent', () => {
  let component: ItemsTypesModifyComponent;
  let fixture: ComponentFixture<ItemsTypesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTypesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTypesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
