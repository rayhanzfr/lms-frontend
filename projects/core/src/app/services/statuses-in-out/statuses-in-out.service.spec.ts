import { TestBed } from '@angular/core/testing';

import { StatusesInOutService } from './statuses-in-out.service';

describe('StatusesInOutService', () => {
  let service: StatusesInOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusesInOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
