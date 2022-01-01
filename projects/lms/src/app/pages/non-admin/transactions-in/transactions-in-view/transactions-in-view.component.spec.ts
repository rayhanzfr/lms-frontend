import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInViewComponent } from './transactions-in-view.component';

describe('TransactionsInViewComponent', () => {
  let component: TransactionsInViewComponent;
  let fixture: ComponentFixture<TransactionsInViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
