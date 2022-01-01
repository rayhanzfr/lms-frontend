import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInDetailViewComponent } from './transactions-in-detail-view.component';

describe('TransactionsInDetailViewComponent', () => {
  let component: TransactionsInDetailViewComponent;
  let fixture: ComponentFixture<TransactionsInDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
