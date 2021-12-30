import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOutDetailViewComponent } from './transactions-out-detail-view.component';

describe('TransactionsOutDetailViewComponent', () => {
  let component: TransactionsOutDetailViewComponent;
  let fixture: ComponentFixture<TransactionsOutDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOutDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOutDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
