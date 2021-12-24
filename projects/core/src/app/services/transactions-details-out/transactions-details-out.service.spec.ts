import { TestBed } from '@angular/core/testing';

import { TransactionsDetailsOutService } from './transactions-details-out.service';

describe('TransactionsDetailsOutService', () => {
  let service: TransactionsDetailsOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsDetailsOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
