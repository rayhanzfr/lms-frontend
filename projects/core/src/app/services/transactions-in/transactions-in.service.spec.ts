import { TestBed } from '@angular/core/testing';

import { TransactionsInService } from './transactions-in.service';

describe('TransactionsInService', () => {
  let service: TransactionsInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
