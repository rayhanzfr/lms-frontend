import { TestBed } from '@angular/core/testing';

import { StatusesAssetsService } from './statuses-assets.service';

describe('StatusesAssetsService', () => {
  let service: StatusesAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusesAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
