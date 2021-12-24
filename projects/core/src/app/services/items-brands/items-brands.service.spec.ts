import { TestBed } from '@angular/core/testing';

import { ItemsBrandsService } from './items-brands.service';

describe('ItemsBrandsService', () => {
  let service: ItemsBrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsBrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
