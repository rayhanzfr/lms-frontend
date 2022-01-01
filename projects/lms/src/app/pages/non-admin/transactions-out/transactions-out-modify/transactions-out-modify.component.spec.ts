import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOutModifyComponent } from './transactions-out-modify.component';

describe('TransactionsOutModifyComponent', () => {
  let component: TransactionsOutModifyComponent;
  let fixture: ComponentFixture<TransactionsOutModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOutModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOutModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
