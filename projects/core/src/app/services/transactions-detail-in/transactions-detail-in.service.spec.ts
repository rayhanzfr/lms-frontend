import { TestBed } from '@angular/core/testing';

import { TransactionsDetailInService } from './transactions-detail-in.service';

describe('TransactionsDetailInService', () => {
  let service: TransactionsDetailInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsDetailInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
