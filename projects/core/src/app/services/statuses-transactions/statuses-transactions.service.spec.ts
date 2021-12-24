import { TestBed } from '@angular/core/testing';

import { StatusesTransactionsService } from './statuses-transactions.service';

describe('StatusesTransactionsService', () => {
  let service: StatusesTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusesTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
