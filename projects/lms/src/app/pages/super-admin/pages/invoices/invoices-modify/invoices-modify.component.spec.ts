import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesModifyComponent } from './invoices-modify.component';

describe('InvoicesModifyComponent', () => {
  let component: InvoicesModifyComponent;
  let fixture: ComponentFixture<InvoicesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
