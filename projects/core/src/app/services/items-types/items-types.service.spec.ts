import { TestBed } from '@angular/core/testing';

import { ItemsTypesService } from './items-types.service';

describe('ItemsTypesService', () => {
  let service: ItemsTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
