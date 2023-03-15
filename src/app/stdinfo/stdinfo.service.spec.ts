import { TestBed } from '@angular/core/testing';

import { StdinfoService } from './stdinfo.service';

describe('StdinfoService', () => {
  let service: StdinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
