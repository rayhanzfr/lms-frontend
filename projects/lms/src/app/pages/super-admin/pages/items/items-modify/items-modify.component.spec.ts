import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsModifyComponent } from './items-modify.component';

describe('ItemsModifyComponent', () => {
  let component: ItemsModifyComponent;
  let fixture: ComponentFixture<ItemsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
