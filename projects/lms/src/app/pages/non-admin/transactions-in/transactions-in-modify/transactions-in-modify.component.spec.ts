import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInModifyComponent } from './transactions-in-modify.component';

describe('TransactionsInModifyComponent', () => {
  let component: TransactionsInModifyComponent;
  let fixture: ComponentFixture<TransactionsInModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
