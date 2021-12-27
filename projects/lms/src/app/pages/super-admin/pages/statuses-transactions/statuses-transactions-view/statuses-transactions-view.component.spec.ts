import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesTransactionsViewComponent } from './statuses-transactions-view.component';

describe('StatusesTransactionsViewComponent', () => {
  let component: StatusesTransactionsViewComponent;
  let fixture: ComponentFixture<StatusesTransactionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusesTransactionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesTransactionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
