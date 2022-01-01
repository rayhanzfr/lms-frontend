import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOutViewComponent } from './transactions-out-view.component';

describe('TransactionsOutViewComponent', () => {
  let component: TransactionsOutViewComponent;
  let fixture: ComponentFixture<TransactionsOutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOutViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
