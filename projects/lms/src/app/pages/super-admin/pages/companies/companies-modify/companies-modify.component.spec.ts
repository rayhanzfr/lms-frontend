import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesModifyComponent } from './companies-modify.component';

describe('CompaniesModifyComponent', () => {
  let component: CompaniesModifyComponent;
  let fixture: ComponentFixture<CompaniesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
