import { TestBed } from '@angular/core/testing';

import { BatabaseService } from './batabase.service';

describe('BatabaseService', () => {
  let service: BatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
