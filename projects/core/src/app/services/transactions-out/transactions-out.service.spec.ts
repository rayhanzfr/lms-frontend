import { TestBed } from '@angular/core/testing';

import { TransactionsOutService } from './transactions-out.service';

describe('TransactionsOutService', () => {
  let service: TransactionsOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
