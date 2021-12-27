import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesTransactionsModifyComponent } from './statuses-transactions-modify.component';

describe('StatusesTransactionsModifyComponent', () => {
  let component: StatusesTransactionsModifyComponent;
  let fixture: ComponentFixture<StatusesTransactionsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusesTransactionsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesTransactionsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
